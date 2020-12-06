var mouseEvent = "empty";
var last_x, last_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "red";
width_of_line = 2;
var width_s = screen.width;

new_w = screen.width - 70;
new_h = screen.height - 300;

if (width_s < 992) {
    document.getElementById("myCanvas").width = new_w;
    document.getElementById("myCanvas").height = new_h; 
    //lock the scrollbar 
    document.body.style.overflow = "hidden";

}



canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width").value;

last_x=e.touches[0].clintX-canvas.offsetLeft;
last_y=e.touches[0].clintY-canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e) {
    current_x = e.touches[0].clientX - canvas.offsetLeft;
    current_y = e.touches[0].clientY - canvas.offsetTop;



        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y)
        ctx.stroke();



    last_x = current_x;
    last_y = current_y;
}