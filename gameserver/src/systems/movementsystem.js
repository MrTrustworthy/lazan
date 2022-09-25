const {System} = require('./system');
const {Point} = require('../utils/point');

class MovementSystem extends System {
    requiredTypes = ["Movement", "Position"]

    processEntity(entity, data) {
        let pos = entity.components.getSingleType("Position");
        let mov = entity.components.getSingleType("Movement");
        let current = Point.step(pos.point, mov.point, mov.speed);
        pos.point = current;
        if (current.equals(mov.point)) {
            // done, remove component
            entity.components.remove(mov);
        }
    };
}

module.exports = {MovementSystem}