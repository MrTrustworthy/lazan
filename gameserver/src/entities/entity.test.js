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