var x;
var y;
var a;
var b;
var c;

var size = 40;
var count = 10;
var sizeDirection = 30;

var changeDirection;


function setup() {
  createCanvas(400, 400);
//this is the second pupil
  x = 216;
//this is the first pupil
  y = 191;
//this is the rhand  
  a = 100;
//this is the lhand  
  b = 100;
 //this is the textsize
  t = 30;
  changeDirection = false;  
}


function draw() {
  background(220);
  
  //head
  fill(400,400,200);
  //skintone
  ellipse(200,200,60,70);
  //scleraOne
  fill(300,300,300);
  circle (185,190,15);
    //scleraTwo
  fill(300,300,300);
  circle(215,190,15);
    //nose
  fill(300,300,200);
  circle(200,200,5);
  //mouth
  fill(300,300,300)
  rect(190,210,20,10);
  
  //This is where I make the pupils move
  //pupilOne
  fill(0,0,0);
  circle (y,191,5);
    if(y>width){
    changeDirection=true}
  else if (y<=0){
    changeDirection=false}
  if (y>=0 && changeDirection == false){
    y=y+1}
  else if (changeDirection == true){
    y=y-1}

  //pupilTwo
  fill(0,0,0);
  circle(x,191,5);
  if(x>width){
    changeDirection=true}
  else if (x<=0){
    changeDirection=false}
  if (x>=0 && changeDirection == false){
    x=x+1}
  else if (changeDirection == true){
    x=x-1}


  
  //hat
  fill(200,200,100);
  triangle(170,180,195,140,230,180);
  //pompom
  fill(0,0,0)
  circle(195,130,20);
  
  
  //body
  
  //shirt
  fill(0,0,0);
  rect(170,240,70,90);
    //bottom
  fill(0,0,200);
  square(170,330,70);
  
  //dots(req)
  fill(0,0,0);
  point(0,100);
  point(10,100);
  point(30,100);
  point(50,100);
  point(70,100);
  point(90,100);
  point(110,100);
  point(130,100);
  point(150,100);
  point(170,100);
  point(190,100);
  point(210,100);
  point(230,100);
  point(250,100);
  point(270,100);
  point(290,100);
  point(310,100);
  point(330,100);
  point(350,100);
  point(370,100);
  point(390,100);
  //arms
  line(170,240,140,100);
  line(240,240,250,100);
  
  //rhand
  //here is where i make the rhand move
  fill(400,400,200);
  square(130,a,20);
   if(a>height){
    changeDirection=true}
  else if (a<=0){
    changeDirection=false}
  if (a>=0 && changeDirection == false){
    a=a+3}
  else if (changeDirection == true){
    a=a-3}
  //lhand
  //here is where i make the lhand move
  fill(400,400,200);
  square(240,b,20);
  if(b>height){
    changeDirection=true}
  else if (b<=0){
    changeDirection=false}
  if (b>=0 && changeDirection == false){
    b=b+1}
  else if (changeDirection == true){
    b=b-1}

  //title
    fill(120);
    textSize(size);
    size= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("I did it!",150,30 );
  
  
  
  //shirt
  fill(300,300,300);
  textSize(15)
  text('Yay!',190,270);
 
  
  //signature
  fill(0,0,0);
  textSize(20);
  text('Robyn',330,390);
  
  
  
}