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
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightwristX="+rightWristX+"and rightwristY="+rightWristY);
    scorerightwrist=results[0].pose.keypoints[10].score;
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
    fill("#A52A2A");
    stroke("#7a9703");
if(scoreleftwrist>0.2){
    circle(leftWristX,leftWristY,20);
    CHEEze=Number(leftWristY);
    URMom=floor(CHEEze);
    volume=URMom/500;
    document.getElementById("volume").innerHTML="volume="+volume;
    song.setVolume(volume);
}
if(scorerightwrist>0.2){
    circle(rightWristX,rightWristY,20);
    if(rightWristY>0 && rightWristY<=100){
        document.getElementById("speed").innerHTML="speed=0.5x";
        song.rate(0.5);
    }
    else if(rightWristY>100 && rightWristY<=200){
            document.getElementById("speed").innerHTML="speed=1x";
            song.rate(1);
    }
    else if(rightWristY>200 && rightWristY<=300){
        document.getElementById("speed").innerHTML="speed=1.5x";
        song.rate(1.5);  
}
else if(rightWristY>300 && rightWristY<=400){
    document.getElementById("speed").innerHTML="speed=2x";
    song.rate(2);
}
else if(rightWristY>400){
    document.getElementById("speed").innerHTML="speed=2.5x";
    song.rate(2.5);
}
}
}