window.onload = function(){
    //img.src = "http://192.168.1.68:8080/?action=stream";
    var name = $("#object_name");
    var relay_id = $("#relay");
    var submit = $("#save");
    var socket = io.connect('http://localhost:8080');
    var c = document.getElementById("canva");
    var ctx = c.getContext('2d');

    config_ctx();
    var img = new Image();

    var inputs = {
      disable: function(){
        name.prop("disabled", true);
        relay_id.prop("disabled", true);
        submit.prop("disabled", true);
      },
      enable: function(){
        name.prop("disabled", false);
        relay_id.prop("disabled", false);
        submit.prop("disabled", false);
      }
    };
    inputs.disable();

    var reply = {
      error: function(text){
        $("nav").css("background-color","#d9534f");
        $("#mess").text(text);
      },
      safe: function(text){
        $("nav").css("background-color","#00bf8a");
        $("#mess").text(text);
      }
    }
    img.onerror = function(){
      reply.error("Không thể kết nối với Intel Edison");
    }
    var object = {
      x:0,y:0,w:0,h:0
    };
    var selected = false;
    var mousedowned = false;
    window.setInterval(function(){
      img.src = "http://192.168.1.68:8080/?action=stream?" + Math.random();
      ctx.drawImage(img,0,0);
      ctx.beginPath();
      ctx.rect(object.x,object.y,object.w,object.h);
      ctx.stroke();
    },200);

    socket.on('is_successed',function(data){
      reply.safe("Đã nhận được vật!");
      alert(data);
    });

    c.onmousedown = function(e){
      rect = c.getBoundingClientRect();
      if (mousedowned) return;
      object = {
        x:0,y:0,w:0,h:0
      };
      object.x = e.x - rect.left;
      object.y = e.y - rect.top;
      mousedowned = true;
    }
    c.onmouseup = function(e){
      rect = c.getBoundingClientRect();
      if (!mousedowned) return;
      object.w = Math.abs((e.x-rect.left) - object.x);
      object.h = Math.abs((e.y-rect.top) - object.y);
      mousedowned = false;
      inputs.enable();
    }

    submit.click(function(){
      if (name.val()=="") return;
      var new_object = {
        name: name.val(),
        relay_id: relay_id.val()
      };
      socket.emit('new_object',new_object);
    });

    function config_ctx(){
      ctx.lineWidth = "4";
      ctx.strokeStyle = "rgb(200, 34, 22)";
    }
}
