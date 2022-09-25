const {v4: uuidv4} = require('uuid');

class Component {
    type = "Component";
    id = uuidv4();

    equals(other) {
        return this.id === other.id;
    }
}



module.exports = {Component}