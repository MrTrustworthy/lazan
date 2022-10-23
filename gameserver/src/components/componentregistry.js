const {Position} = require('./position');
const {Movement} = require('./movement');


class ComponentRegistry {
    static #registry = {};

    static register(cls) {
        this.#registry[cls.type] = cls;
    }

    static getClass(type) {
        let cls = this.#registry[type];
        if (!cls) throw new ComponentNotRegisteredError()
        return cls;
    }

    static loadFromJson(json) {
        let constructor = this.getClass(json.type)
        let comp = new constructor(json.data)
        comp.id = json.id
        return comp;
    }
}

ComponentRegistry.register(Position);
ComponentRegistry.register(Movement);

class ComponentNotRegisteredError extends Error {
}

module.exports = {ComponentRegistry, ComponentNotRegisteredError}


