const {Component} = require('./component')
const {Point} = require('../utils/point')

class Position extends Component {

    #point;
    static type = "Position";

    constructor(data) {
        super();
        this.#point = new Point(data.x, data.y)
    }

    distance(other) {
        return this.#point.distance(other.#point)
    }

    get point() {
        return this.#point;
    }

    set point(point) {
        this.#point = point;
    }

    serialize() {
        return {
            type: "Position",
            id: this.id,
            data: {
                x: this.#point.x,
                y: this.#point.y,
            }
        }
    }
}

module.exports = {Position}