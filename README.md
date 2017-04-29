# hoverroom2
![alt text](https://raw.githubusercontent.com/khangprolxag/hoverroom2/master/main.jpg)

Tại đây mình sẽ open source dần dần dự án hoverroom của mình. HoverRoom sẽ giúp bạn điều khiển vật điện chỉ bằng hướng chỉ của tay dựa trên những dataset đã train sẵn. Nếu bạn có ý kiến hay góp ý gì về HoverRoom có thể liên hệ trực tiếp facebook của mình 
user = {
  facebook: "Võ Ngọc Khang",
  url: "https://www.facebook.com/meracle.vn"
};
Mình rất mong các bạn sẽ ủng hộ dự án và đưa nó lên tầm cao hơn những gì mình đã làm! 

# Cấu trúc HoverRoom
Intel Edison = [Website điều khiển và chọn vật, webcam ] 
Server chính = [Xử lí hình ảnh, trả về Json]
Từ ảnh webcam sẽ được gửi lên Server chính để xử lí hình ảnh với tốc độ cao hơn mà intel edison không tài nào làm được. Sau khi xử lí ảnh ta trả về hướng chỉ của tay và xét vật nào gần nhất. Đơn giản nhỉ? :D 
