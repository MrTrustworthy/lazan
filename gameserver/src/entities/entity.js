const {v4: uuidv4} = require('uuid');
const {ComponentList} = require('../components/componentlist')
const {ComponentRegistry} = require('../components/componentregistry')

class Entity {

    components = new ComponentList();
    id = uuidv4();


    equals(other) {
        return this.id === other.id;
    }

    static loadFromJson(json) {
        const entity = new Entity()
        entity.id = json["id"]
        json["components"].forEach(comp => {
            entity.components.add(ComponentRegistry.loadFromJson(comp))
        })
        return entity
    }
}

module.exports = {Entity}