const {Component} = require('./component')
const {Point} = require('../utils/point')

class Movement extends Component {

    #point;
    speed;
    static type = "Movement";

    constructor(data) {
        super();
        this.#point = new Point(data.x, data.y)
        this.speed = data.speed;
    }

    distance(other) {
        return this.#point.distance(other.#point)
    }

    get point() {
        return this.#point;
    }

    serialize() {
        return {
            type: "Movement",
            id: this.id,
            data: {
                x: this.#point.x,
                y: this.#point.y,
                speed: this.speed,
            }
        }
    }
}

module.exports = {Movement}