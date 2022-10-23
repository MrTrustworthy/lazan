class Receiver {

    constructor() {


        this.connection = new WebSocket("ws://localhost:8080")

        //this.connection.onmessage = function (event) {
        //    console.log(event);
        //}

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }

    }
}

export default Receiver