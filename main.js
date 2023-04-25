song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("a.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("loaded");
}

function gotPoses(results){
if(results.length > 0){
    console.results(results);
}
}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function draw(){
    image(video,0,0,600,500);


}