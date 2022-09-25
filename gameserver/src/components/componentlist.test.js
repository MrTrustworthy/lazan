const {ComponentList, DuplicateComponentError, ComponentNotThereError} = require('./componentlist');
const {Component} = require('./component');


class TestComponent1 extends Component {
    type = "TestComponent1"
}


test('Basic ComponentList behaviour', () => {

    let clist = new ComponentList();
    let c1 = new TestComponent1();
    let c2 = new TestComponent1();

    clist.add(c1)
    clist.add(c2)

    expect(clist.length).toBe(2);
    expect(clist.contains(c1)).toBe(true);
    expect(() => {
        clist.add(c1)
    }).toThrow(DuplicateComponentError)
    expect(clist.containsType(c1.type)).toBe(true);
    expect(clist.containsAllTypes([c2.type])).toBe(true);

    let r1 = clist.remove(c1)

    expect(c1.equals(r1)).toBe(true)
    expect(clist.length).toBe(1);
    expect(clist.contains(c1)).toBe(false)
    expect(clist.contains(c2)).toBe(true)
    expect(() => {
        clist.remove(c1)
    }).toThrow(ComponentNotThereError)

    clist.add(c1)
    expect(clist.length).toBe(2);


    let r2s = clist.removeType("TestComponent1")
    expect(r2s.length).toBe(2);
    expect(clist.length).toBe(0);
    expect(clist.contains(c1)).toBe(false)
    expect(clist.contains(c2)).toBe(false)
    expect(() => {
        clist.remove(c2)
    }).toThrow(ComponentNotThereError)
    expect(clist.containsType(c1.type)).toBe(false);
    expect(clist.containsAllTypes([c2.type])).toBe(false);

});


test('ComponentList Duplicate behaviours', () => {

    let clist = new ComponentList();
    let c1 = new TestComponent1();
    let c2 = new TestComponent1();

    clist.add(c1);
    clist.add(c2);

    expect(() => {
        clist.getSingleType("Component")
    }).toThrow(ComponentNotThereError);
    clist.remove(c2);
    expect(clist.getSingleType("TestComponent1").equals(c1)).toBe(true);

});