song1="yt1s.com - Doremon Song Lyrics  Zindagi Sawaar Du.mp3";
song2="yt1s.com - Shinchan Theme Song LYRICS.mp3"
rightWristX=0;
leftWristX=0;
rightWristY=0;
leftWristY=0;
function preload(){
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes)
}
function modelloaded(){
    console.log("posenet is initialised");
}
function gotpose(results){
    console.log(results);
   
}

function draw(){
image(video,0,0,600,500);
}
