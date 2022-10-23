const {Position} = require('./position');
const {ComponentRegistry} = require('../components/componentregistry')

test('Basic Position behaviour', () => {

    let p1 = new Position({x: 0, y: 0});
    let p2 = new Position({x: 1, y: 1});

    expect(p1.constructor.type).toBe("Position")
    expect(p1.distance(p2)).toBe(Math.sqrt(2))

});


test('Serialization', async () => {
    let json = {
        id: "abc",
        type: "Position",
        data: {x: 1, y: 1}
    }

    let c = ComponentRegistry.loadFromJson(json)
    let serialized = c.serialize();
    expect(json).toEqual(serialized);
});