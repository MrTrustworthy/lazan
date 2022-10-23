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
        if (Object.keys(this.instances).length >= (this.#ports.max - this.#ports.min)) {
            throw new Error("Not enough ports to run another instance")
        }

        this.ports.current += 1;
        // TODO all the duplicate avoiding stuff
        return this.ports.current;
    }


    createInstance(parameters) {


        let instance = new Instance(parameters);
        let id = this.#getNextId();
        let wss = new WebSocketServer({port: id})
        this.#instances[id] = {wss, instance}

        wss.on('connection', function connection(conn, req) {
            conn.send(`Welcome to session on port ${port}`);


            conn.on('message', (data) => console.log(`Instance ${port} has received data: ${data}`));


            setInterval(() => conn.send(instance.getState()), 1000)
        });

        console.log(`Instance ${port} is now live`)

    }

}

