function setup(){
canvas=createCanvas(730, 500);
canvas.center()
    
objectDetection=ml5.objectDetector('cocossd', modelloaded);
}

function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(kitchen_pic, gotResults);
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
kitchen_pic=loadImage("Kitchen.jpg");
}
    
function draw(){
image(kitchen_pic, 0, 0, 730, 500);

stroke("red");
noFill();
rect(590, 10, 100, 100);
text("Lamp Shade", 605, 25);

rect(230, 180, 130, 90);
text("Sink", 245, 195);
}
    
function back(){
window.location="index.html";
}