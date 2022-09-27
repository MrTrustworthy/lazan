const {Entity} = require('../entities/entity');
const {MovementSystem} = require('./movementsystem');

class World {

    #systems = [
        new MovementSystem()
    ];
    #entities = [];
    tickrate = 1 / 10
    running = true

    get entities() {
        return this.#entities;
    }

    process() {
        this.#systems.forEach(system => {
            system.process(this.#entities, {})
        })
        if (this.running) setTimeout(this.process.bind(this), this.tickrate)
    }


    static loadFromJson(json) {
        let world = new World();
        world.#entities.push(...json["entities"].map(Entity.loadFromJson))
        return world;
    }

}

module.exports = {World}