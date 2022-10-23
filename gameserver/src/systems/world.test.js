const {System} = require('./system');
const {Component} = require('../components/component');
const {Entity} = require('../entities/entity');
const {arrayEquals} = require('../utils/arrayutils')

const {World, ProcessStatus, RunningProcessError} = require('./world')

test('World Loading', () => {
    let w = World.loadFromJson({
        time: 0,
        entities: [
            {
                id: "bananas-id",
                components: [
                    {
                        id: "abc",
                        type: "Position",
                        data: {x: 1, y: 1}
                    },
                    {
                        id: "abcd",
                        type: "Movement",
                        data: {x: 10, y: 10, speed: 1}
                    }
                ]
            }
        ]
    })


    expect(w.entities.length).toBe(1);
    expect(w.entities[0].components.length).toBe(2);
});


test('Processing', async () => {
    let w = World.loadFromJson({
        time: 20,
        entities: []
    })

    expect(w.time).toBe(20);
    expect(w.processStatus).toBe(ProcessStatus.STOPPED)

    w.startProcess()
    expect(w.processStatus).toBe(ProcessStatus.RUNNING)
    expect(() => w.startProcess()).toThrow(RunningProcessError);
    expect(w.processStatus).toBe(ProcessStatus.RUNNING)
    expect(w.time).toBe(20);

    await sleep(1);
    let time = w.time;
    expect(time).toBe(30);
    expect(w.processStatus).toBe(ProcessStatus.RUNNING)

    w.stopProcess();
    expect(w.processStatus).toBe(ProcessStatus.STOPPED);

    await sleep(0.2);
    expect(w.processStatus).toBe(ProcessStatus.STOPPED);
    expect(w.time).toBe(time);
});


function sleep(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}
