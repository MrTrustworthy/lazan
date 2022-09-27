const {Movement} = require('./movement');

test('Basic Movement behaviour', () => {

    let p1 = new Movement({x: 0, y: 0});
    let p2 = new Movement({x: 1, y: 1});
    expect(p1.constructor.type).toBe("Movement")
    expect(p1.distance(p2)).toBe(Math.sqrt(2))

});