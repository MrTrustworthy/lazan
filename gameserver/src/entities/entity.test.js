const {Entity} = require('./entity');

test('Basic Entity behaviour', () => {

    let e1 = new Entity();
    let e2 = new Entity();

    expect(e1.equals(e1)).toBe(true);
    expect(e1.equals(e2)).toBe(false);

});


test('Json loading', () => {

    let e1 = Entity.loadFromJson({
        id: "applepie",
        components: [
            {
                id: "bananapie",
                type: "Position",
                data: {}
            }
        ]
    });
    expect(e1.components.length).toBe(1);
});


test('Serialization', async () => {
    let json = {
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

    let e = Entity.loadFromJson(json)
    let serialized = e.serialize();
    expect(json).toEqual(serialized);
});