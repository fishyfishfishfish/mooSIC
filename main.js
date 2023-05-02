song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
scoreleftwrist=0;
scorerightwrist=0;

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
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftwistX="+leftWristX+" and leftwristY="+leftWristY);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    console.log("scoreleftwrist="+scoreleftwrist);
}

}

function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
}

function draw(){
    image(video,0,0,600,500);
if(scoreleftwrist>0.2){
    circle(leftWristX,leftWristY,20);
    CHEEze=Number(leftWristY);
    URMom=floor(CHEEze);
    volume=URMom/500;
    document.getElementById("volume").innerHTML="volume="+volume;
    song.setVolume(volume);
}
}