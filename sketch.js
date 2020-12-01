var homescreen,donateForm;

function setup() {
  createCanvas(displayWidth,displayWidth);
  homescreen=new HomeScreen();
}

function draw() {
  background(255,255,255);  
  homescreen.display();
}