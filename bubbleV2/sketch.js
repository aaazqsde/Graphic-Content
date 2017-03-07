

var bubbles = [];

function setup() {
    createCanvas(600, 400);
    for (var i = 0; i < 20; i++) {

        var x = random(0, width);
        var y = random(0, height);
        bubbles[i] = new Bubble(x, y);

    }

}

function draw() {
    background(0);
    for (var i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].display();
    }

}

function mouseDragged() {
    if (bubbles.length <= 100) {
        bubbles.push(new Bubble(mouseX, mouseY));
    } else if (bubbles.length > 40) {
        bubbles.splice(0, 1);
    }
}
