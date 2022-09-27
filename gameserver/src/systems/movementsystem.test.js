const {MovementSystem} = require('./movementsystem');
const {Position} = require('../components/position');
const {Movement} = require('../components/movement');
const {Entity} = require('../entities/entity');
const {ComponentNotThereError} = require('../components/componentlist');


test('Basic Movement System behaviour', () => {

    let ps = new Position({x: 2, y: 2});
    let mv = new Movement({x: 30, y: 2, speed: 4});
    let e1 = new Entity();
    e1.components.add(ps);
    e1.components.add(mv);

    let ps2 = new Position({x: 2, y: 2});
    let e2 = new Entity();
    e2.components.add(ps2);

    let ms = new MovementSystem();

    ms.process([e1, e2])
    expect(e1.components.getSingleType("Position").distance(new Position({x: 6, y: 2}))).toBeCloseTo(0, 5);
    expect(e2.components.getSingleType("Position").distance(new Position({x: 2, y: 2}))).toBeCloseTo(0, 5);

    for (i = 0; i < 10; i++) {
        ms.process([e1, e2])
    }

    expect(e1.components.getSingleType("Position").distance(new Position({x: 30, y: 2}))).toBeCloseTo(0, 5);
    expect(() => e1.components.getSingleType("Movement")).toThrow(ComponentNotThereError)

});


