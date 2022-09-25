const {Point} = require('./point');

test('Basic Point behaviour', () => {

    let p1 = new Point(1, 1);
    let p2 = new Point(2, 2);
    let p3 = new Point(5, 1);


    expect(Point.distance(p1, p2)).toBe(Math.sqrt(2));
    expect(Point.distance(p1, p3)).toBe(4);
    expect(p1.equals(p1)).toBe(true);
    expect(p1.equals(p2)).toBe(false);
});


test('Basic Interpolation', () => {

    let p1 = new Point(0, 0);
    let p2 = new Point(0, 5);
    let p3 = new Point(0, -5);
    let p5 = new Point(10, 10);

    expect(Point.step(p1, p1, 0).equals(p1)).toBe(true);
    expect(Point.step(p1, p1, 20).equals(p1)).toBe(true);

    expect(Point.step(p1, p2, 0).equals(p1)).toBe(true);
    expect(Point.step(p1, p2, 1).equals(new Point(0, 1))).toBe(true);

    expect(Point.step(p1, p3, 1).equals(new Point(0, -1))).toBe(true);

});

test('Random Interpolation', () => {

    let rand = (max) => Math.floor(Math.random() * max);


    let px1 = new Point(rand(20), rand(20));
    let px2 = new Point(50 + rand(20), -50 - rand(20));
    let distance = px1.distance(px2);
    [0, 1, 7, 12, 24, 30].forEach(speed => {
        expect(Point.step(px1, px2, speed).distance(px2)).toBeCloseTo(distance - speed, 5);
    })

});