function preload() {

}

function setup() {
canvas = createCanvas(640, 480)
circle(30, 30, 40)
rect(50, 13, 500, 35)
circle(570, 30, 40)
rect(552, 50, 35, 370)
circle(570, 440, 40)
rect(50, 420, 501, 40)
circle(30, 440, 40)
rect(10, 50, 40, 370)
video = createCapture(VIDEO);
 video.hide();
}

function draw() {
    image(video, 51, 50, 500, 369)
}

function take_snapshot() {
    save('creative_canvas.png');
}