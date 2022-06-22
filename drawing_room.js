function setup(){
canvas=createCanvas(730, 500);
canvas.center()

objectDetection=ml5.objectDetector('cocossd', modelloaded);
}
    
function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(hall_pic, gotResults);
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
hall_pic=loadImage("Drawing Room.jpg");
}
    
function draw(){
image(hall_pic, 0, 0, 730, 500);

stroke("pink");
noFill();
rect(220, 290, 290, 100);
text("Couch", 235, 305);

stroke("red");
noFill();
rect(300, 10, 180, 100);
text("Lamp Shade", 315, 25);
}
    
function back(){
window.location="index.html";
}