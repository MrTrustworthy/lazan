const {Movement} = require('./movement');

test('Basic Movement behaviour', () => {

    let p1 = new Movement(0, 0);
    let p2 = new Movement(1, 1);

    expect(p1.type).toBe("Movement")
    expect(p1.distance(p2)).toBe(Math.sqrt(2))

});