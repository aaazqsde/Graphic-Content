function Bubble(x, y) {
    this.x = x;
    this.y = y;
    //this.diameter = random(10, 120);
    this.diameter1 = random(10, 120);
    this.diameter2 = random(10, 120);
    this.trans = random(10, 200);
    this.r = random(0, 255);
    this.g = random(0, 255);
    this.b = random(0, 255);
    this.sx = random(-1, 1);
    this.sy = random(-1, 1);

    this.display = function() {
        noStroke();
        //noFill();
        fill(this.r, this.g, this.b, this.trans);
        ellipse(this.x, this.y, this.diameter1, this.diameter2);
    }

    this.move = function() {
        this.x += this.sx;
        this.y += this.sy;
    }

}
