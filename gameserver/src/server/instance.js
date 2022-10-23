const {World} = require('../systems/world');

class Instance {

    #world = null;

    constructor(parameters) {
        this.#world = World.loadFromJson({
            time: 0,
            entities: [
                {
                    id: "bananas-id",
                    components: [
                        {
                            id: "abc",
                            type: "Position",
                            data: {x: 1, y: 1}
                        },
                        {
                            id: "abcd",
                            type: "Movement",
                            data: {x: 10, y: 10, speed: 0.1}
                        }
                    ]
                }
            ]
        })

        setTimeout(() => this.#world.startProcess(), 2000)

    }

    getState() {
        return this.#world.serialize();
    }

}

module.exports = {Instance}