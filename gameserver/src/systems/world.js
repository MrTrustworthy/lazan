const {Entity} = require('../entities/entity');
const {MovementSystem} = require('./movementsystem');


const SYSTEMS = [
    new MovementSystem(),
]


const ProcessStatus = {
    RUNNING: "Running",
    STOPPED: "Stopped",
}


class World {

    #systems = SYSTEMS;
    #entities = [];
    #time = 0
    #processHandle = null;
    tickrate = 1 / 10

    get entities() {
        return this.#entities;
    }

    get time() {
        return this.#time;
    }

    get processStatus() {
        return this.#processHandle === null ? ProcessStatus.STOPPED : ProcessStatus.RUNNING;
    }

    startProcess() {
        if (this.processStatus === ProcessStatus.RUNNING) {
            throw new RunningProcessError(`Process loop is already running`)
        }
        this.#processHandle = setInterval(this.#processLoop.bind(this), this.tickrate * 1000)
    }

    stopProcess() {
        if (this.processStatus === ProcessStatus.STOPPED) {
            throw new RunningProcessError(`Process loop is already stopped`)
        }
        clearInterval(this.#processHandle)
        this.#processHandle = null;
    }

    #processLoop() {
        if (this.processStatus === ProcessStatus.STOPPED) {
            throw new RunningProcessError("Something went terribly wrong");
        }

        this.#time++;
        this.#systems.forEach(system => {
            system.process(this.#entities, {})
        })
    }

    static loadFromJson(json) {
        let world = new World();
        world.#time = json.time
        world.#entities.push(...json.entities.map(Entity.loadFromJson))
        return world;
    }

}

class RunningProcessError extends Error {
}

module.exports = {World, ProcessStatus, RunningProcessError}