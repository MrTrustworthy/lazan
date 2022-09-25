const {arrayEquals} = require('./arrayutils')

class E {
    constructor(x) {
        this.x = x;
    }

    equals(other) {
        return this.x === other.x
    }
}

test('arrayEquals', () => {
    e1 = new E(1)
    e2 = new E(2)
    e3 = new E(3)
    e4 = new E(4)
    e5 = new E(5)

    l1 = [e1, e2, e3, e4, e5]
    l2 = [e1, e2, e3, e4]
    l3 = [e1, e2, e3, e5, e4]
    l4 = []

    expect(e1.equals(e1)).toBe(true)
    expect(e2.equals(e2)).toBe(true)
    expect(e3.equals(e3)).toBe(true)
    expect(e4.equals(e4)).toBe(true)

    expect(e1.equals(e2)).toBe(false)
    expect(e2.equals(e3)).toBe(false)
    expect(e3.equals(e4)).toBe(false)
    expect(e4.equals(e1)).toBe(false)
});

