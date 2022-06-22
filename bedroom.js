function setup(){
canvas=createCanvas(730, 500);
canvas.center()
    
objectDetection=ml5.objectDetector('cocossd', modelloaded);
}
    
function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(bed_pic, gotResults);
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
bed_pic=loadImage("Bedroom.jpg");
}

function draw(){
image(bed_pic, 0, 0, 730, 500);

stroke("blue");
noFill();
rect(280, 230, 430, 250);
text("Bed", 295, 245);

rect(500, 20, 100, 150);
text("Lamp Shade", 515, 35);
}

function back(){
window.location="index.html";
}