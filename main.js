function setup(){
    canvas = createCanvas(300, 300);
    canvas.parent('candle');

    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log(" The Candle is Loaded XD ");
}

function draw(){
    image(video, 0, 0, 300, 300);
}