const {Position} = require('./position');

test('Basic Position behaviour', () => {

    let p1 = new Position(0, 0);
    let p2 = new Position(1, 1);

    expect(p1.type).toBe("Position")
    expect(p1.distance(p2)).toBe(Math.sqrt(2))

});