function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //head
  fill(400,400,200);
  //skintone
  ellipse(200,200,60,70);
  //sclera
  fill(300,300,300);
  circle (185,190,15);
  //pupil
  fill(0,0,0);
  circle (186,191,5);
  //sclera
  fill(300,300,300);
  circle(215,190,15);
  //pupil
  fill(0,0,0);
  circle(216,191,5);
  //nose
  fill(300,300,200);
  circle(200,200,5);
  //mouth
  fill(300,300,300)
  rect(190,210,20,10);

  
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
  fill(400,400,200);
  square(130,100,20);
  //lhand
  fill(400,400,200);
  square(240,100,20);

  //title
  fill(0,0,0);
  textSize(20)
  text('I did it!',160,30);
  
  //shirt
  fill(300,300,300);
  textSize(15)
  text('Yay!',190,270);
  
  //signature
  fill(0,0,0);
  textSize(20);
  text('Robyn',330,390);
  
}