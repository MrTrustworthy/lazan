const {v4: uuidv4} = require('uuid');
const {ComponentList} = require('../components/componentlist')

class Entity {

    components = new ComponentList();
    id = uuidv4();


    equals(other) {
        return this.id === other.id;
    }
}

module.exports = {Entity}