const {System} = require('./system');
const {Component} = require('../components/component');
const {Entity} = require('../entities/entity');
const {arrayEquals} = require('../utils/arrayutils')

const {World} = require('./world')

test('World Loading', () => {
    let w = World.loadFromJson({
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
                        data: {x: 10, y: 10, speed: 1}
                    }
                ]
            }
        ]
    })


    expect(w.entities.length).toBe(1);
    expect(w.entities[0].components.length).toBe(2);
});


