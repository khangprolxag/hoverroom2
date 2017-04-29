var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));
app.set('view engine','ejs');

app.get('/', function(req,res){
    res.render('pages/index');
});

io.on('connection', function(client){
  console.log("Client connected...");
  client.on('new_object',function(data){
    console.log(data['name']);
    client.emit('is_successed','yeh! đã nhận được vật, bất đầu sử dụng');
  });
});

server.listen(8080);

console.log('Start!');
