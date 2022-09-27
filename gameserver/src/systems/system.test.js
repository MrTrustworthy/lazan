const {System} = require('./system');
const {Component} = require('../components/component');
const {Entity} = require('../entities/entity');
const {arrayEquals} = require('../utils/arrayutils')


class TestComponent1 extends Component {
    static type = "Test1"
}

class TestComponent2 extends Component {
    static type = "Test2"
}

class TestSystem1 extends System {

    processEntity(entity, data) {
        return data["ok"];
    }
}

test('Basic System behaviour', () => {

    let s1 = new TestSystem1();


    let c1 = new TestComponent1();
    let c2 = new TestComponent2();

    let e1 = new Entity();
    e1.components.add(c1);

    let e2 = new Entity();
    e2.components.add(c2);

    let e3 = new Entity();
    e3.components.add(c1);
    e3.components.add(c2);

    let e4 = new Entity();

    let entities = [e1, e2, e3, e4]

    s1.requiredTypes = []
    expect(arrayEquals(s1.applicableEntities(entities), [e1, e2, e3, e4])).toBe(true);

    s1.requiredTypes = ["Test1"]
    expect(arrayEquals(s1.applicableEntities(entities), [e1, e3])).toBe(true);

    s1.requiredTypes = ["Test2"]
    expect(arrayEquals(s1.applicableEntities(entities), [e2, e3])).toBe(true);

    s1.requiredTypes = ["Test1", "Test2"]
    expect(arrayEquals(s1.applicableEntities(entities), [e3])).toBe(true);
});


