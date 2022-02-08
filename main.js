// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		//write a code to check the type of key pressed
	else if{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
	}
	else if(keyPressed == 17 || keyPressed == 18 || keyPressed == 27 ){
specialkey();
document.getElementById("d1").innerHTML="You pressed special key";
	}
	else if(keyPressed >=48 && keyPressed <=57){
numberkey();
document.getElementById("d1").innerHTML="You pressed number"
	}
     else if((keyPressed>=0 && keyPressed<=16)) || (keyPressed>=19 && keyPressed<=26) ||( keyPressed>=28 && keyPressed<=36 )|| (keyPressed>=41 && keyPressed<=48)|| (keyPressed>=58 && keyPressed<=64) || (keyPressed>=91 && keyPressed<=96)|| (keyPressed>=123 && keyPressed<=255)){
otherkey();
document.getElementById("d1").innerHTML="You pressed other key";
	 }
}
function aplhabetkey()
{
	//upload respective image with the message. 
    img_image = "Alpkey.png";
	add();
}
function numberkey()
{
	img_image = "numkey.png";
	add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
	add();
}
function specialkey()
{
	img_image = "spkey.png"
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
