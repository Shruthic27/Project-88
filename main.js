var c1=new fabric.Canvas("myCanvas")
ball_x=200
ball_y=400
hole_x=50
hole_y=30
ball= 
hole= 

function load_img(){
	fabric.Image.fromURL("golf-h.png",function (Img){
        hole=Img;
        hole.scaleToWidth(50);
        hole.scaleToHeight(50);
        hole.set({top:hole_y,left:hole_x});
        c1.add(hole)
    })
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function (Img){
        ball=Img;
        ball.scaleToWidth(15);
        ball.scaleToHeight(15);
        ball.set({top:ball_y,left:ball_x});
        c1.add(ball)
    })
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	if (keyPressed = e.keyCode) {
	console.log(keyPressed);
	if ((ball_x=50) & (ball_y=30)) {
		c1.remove(ball)
		document.getElementById("hd3").innerHTML="GAME OVER!!! YOU WON!!!"
		
		}
	}
	

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
}
	
	function up()
	{
		if (ball_y>15) {
			ball_y=ball_y-10
		}
	} 
	function down()
	{
		if (ball_y<585) {
			ball_y=ball_y+10
		}
	}

	function left()
	{
		if(ball_x >15)
		{
			ball_x=ball_x-10
		}
	}

	function right()
	{
		if(ball_x <785)
		{
			ball_x=ball_x+10
		}
	}