const {Component} = require('./component')
const {Point} = require('../utils/point')

class Movement extends Component {

    #point;
    speed;
    type = "Movement";

    constructor(x, y, speed) {
        super();
        this.#point = new Point(x, y)
        this.speed = speed;
    }

    distance(other) {
        return this.#point.distance(other.#point)
    }

    get point(){
        return this.#point;
    }
}

module.exports = {Movement}