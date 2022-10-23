const {WebSocketServer} = require('ws');
const {Instance} = require('./instance');

class InstanceServer {

    #ports = {
        min: 6000,
        max: 6999,
        current: 6000
    }
    #instances = {}

    #getNextId() {
        if (Object.keys(this.#instances).length >= (this.#ports.max - this.#ports.min)) {
            throw new Error("Not enough ports to run another instance")
        }

        this.#ports.current += 1;
        // TODO all the duplicate avoiding stuff
        return this.#ports.current;
    }


    createInstance(parameters) {


        let instance = new Instance(parameters);
        let id = this.#getNextId();
        let wss = new WebSocketServer({port: id})
        this.#instances[id] = {wss, instance}

        wss.on('connection', function connection(conn, req) {

            conn.send(JSON.stringify({type: "message", message: `Welcome to session on port ${id}`}));

            conn.on('message', (data) => console.log(`Instance ${id} has received data: ${data}`));

            setInterval(() => {
                let state = instance.getState();
                let data = {
                    type: "fullUpdate",
                    state: state
                }
                conn.send(JSON.stringify(data))
            }, 1000)
        });

        console.log(`Instance ${id} is now live`)

    }

}


const is = new InstanceServer()
is.createInstance()