const {ComponentRegistry, ComponentNotRegisteredError} = require('./componentregistry');

test('Json loading', () => {

    let c1 = ComponentRegistry.loadFromJson({
        id: "rumsdums",
        type: "Position",
        data: {x: 2, y: 4}
    })

    expect(c1.constructor.type).toBe("Position");
    expect(c1.point.y).toBe(4);


    expect(() => {
            ComponentRegistry.loadFromJson({
                id: "rumsdums",
                type: "CrazyBanana",
                data: {x: 1, y: 1}
            })
        }
    ).toThrow(ComponentNotRegisteredError);

});