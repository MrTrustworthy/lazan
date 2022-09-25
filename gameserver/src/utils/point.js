class Point {

    #x = 0;
    #y = 0;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
    }


    distance(other) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;

        return Math.hypot(dx, dy);
    }

    static distance(a, b) {
        return a.distance(b);
    }

    static step(a, b, speed) {
        if (Point.distance(a, b) <= speed) return b;
        let diffPoint = new Point(b.x - a.x, b.y - a.y);
        return new Point(
            a.x + ((diffPoint.x / diffPoint.magnitude) * speed),
            a.y + ((diffPoint.y / diffPoint.magnitude) * speed)
        )
    }

    get magnitude() {
        return Math.hypot(this.x, this.y)
    }

    equals(other) {
        return this.x === other.x && this.y === other.y;
    }

    get x(){
        return this.#x;
    }


    get y(){
        return this.#y;
    }

    toString(){
        return `Point<${this.x}:${this.y}>`
    }
}

module.exports = {Point}