const {Movement} = require('./movement');
const {ComponentRegistry} = require('../components/componentregistry')

test('Basic Movement behaviour', () => {

    let p1 = new Movement({x: 0, y: 0});
    let p2 = new Movement({x: 1, y: 1});
    expect(p1.constructor.type).toBe("Movement")
    expect(p1.distance(p2)).toBe(Math.sqrt(2))

});


test('Serialization', async () => {
    let json = {
        id: "abcd",
        type: "Movement",
        data: {x: 10, y: 10, speed: 1}
    }

    let c = ComponentRegistry.loadFromJson(json)
    let serialized = c.serialize();
    expect(json).toEqual(serialized);
});