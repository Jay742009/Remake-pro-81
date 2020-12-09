canvas = document.getElementById("canvas_1");//to fetch canvas elements
ctx= canvas.getContext("2d");//to draw 2d objects on canvas

color = "black"; 
//to draw a circle when page is loaded
ctx.beginPath();//tells canvas to start drawing at a particular location
ctx.strokeStyle = color;//sets the color to be used to draw
ctx.lineWidth = 2;//sets the width
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);//used to create circle
ctx.stroke();//draws circle

canvas.addEventListener("mousedown", my_mousedown);//gets activated when mouse is clicked on the canvas

function my_mousedown(e)//e is an event which has relation with mousedown
{
    //taking color from input box
    color = document.getElementById("input1").value;
    
  
    
     mouse_x = e.clientX - canvas.offsetLeft;//moves mouse to x coordinate of canvas when clicked
     mouse_y = e.clientY - canvas.offsetTop;//moves mouse to y coordinate of canvas when clicked

    
    circle(mouse_x , mouse_y); //passing coordinates to circle function   
}

function circle(mouse_x , mouse_y)// to draw circle at the coordinates when clicked
{
ctx.beginPath();//tells canvas to start drawing at a particular location
ctx.strokeStyle = color;//sets the color to be used to draw
ctx.lineWidth = 2;
ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI);//used to create circle
ctx.stroke();//draws circle
}

//additional activity

function clearArea()
{
    console.log("Hi");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}