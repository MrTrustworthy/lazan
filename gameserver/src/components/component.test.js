const {Component} = require('./component');

test('Basic Component behaviour', () => {
    let c1 = new Component();
    let c2 = new Component();
    expect(c1.equals(c1)).toBe(true)
    expect(c1.equals(c2)).toBe(false)
});