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
}

module.exports = {Movement}