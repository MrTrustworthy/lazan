const {Entity} = require('./entity');

test('Basic Entity behaviour', () => {

    let e1 = new Entity();
    let e2 = new Entity();

    expect(e1.equals(e1)).toBe(true);
    expect(e1.equals(e2)).toBe(false);

});