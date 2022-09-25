const {Component} = require('./component')
const {Point} = require('../utils/point')

class Position extends Component {

    #point;
    type = "Position";

    constructor(x, y) {
        super();
        this.#point = new Point(x, y)
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
}

module.exports = {Position}