function setup(){
canvas=createCanvas(730, 500);
canvas.center()

objectDetection=ml5.objectDetector('cocossd', modelloaded);
}

function modelloaded(){
console.log("Model is loaded successfully");
objectDetection.detect(bath_pic, gotResults);
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
bath_pic=loadImage("Bathroom.jpg");
}
    
function draw(){
image(bath_pic, 0, 0, 730, 500);

stroke("blue");
noFill();
rect(480, 250, 250, 250)
text("Bath Tub", 495, 265)

rect(200, 50, 200, 200)
text("Wall Mirror", 215, 65)
}
    
function back(){
window.location="index.html";
}