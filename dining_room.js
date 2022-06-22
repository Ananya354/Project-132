function setup(){
canvas=createCanvas(730, 500);
canvas.center()
    
objectDetection=ml5.objectDetector('cocossd', modelloaded);
}
    
function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(dining_room_pic, gotResults);
}
    
function gotResults(error, results){
if(error){
console.error(error);
}
else{
console.log(results);
}
}
    
function preload(){
dining_room_pic=loadImage("Dining Room.jpg");
}
    
function draw(){
image(dining_room_pic, 0, 0, 730, 500);

stroke("red");
noFill();
rect(310, 300, 100, 200);
text("Chair", 325, 315);

rect(100, 260, 80, 150);
text("Indoor Plant", 115, 275);
}
    
function back(){
window.location="index.html";
}