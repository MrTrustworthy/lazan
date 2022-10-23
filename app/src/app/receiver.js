class Receiver {

    constructor() {

        this.connection = new WebSocket("ws://localhost:6001")

        this.connection.onmessage = function (event) {
            let data = JSON.parse(event.data);

            if (data.type === "message") {
                console.log(`Got message: ${data.message}`);

            } else if (data.type === "fullUpdate") {
                let pos = data.state.entities[0].components[0]
                console.log(`[${data.state.time}] ${pos.type}: ${pos.data.x}/${pos.data.y}`);

            } else {
                console.log(`Got very weird message: ${data}`)
            }


        }

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }

    }
}

export default Receiver