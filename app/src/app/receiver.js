class Receiver {

    constructor() {


        console.log("Starting connection to WebSocket Server")
        this.connection = new WebSocket("wss://echo.websocket.org")

        this.connection.onmessage = function (event) {
            console.log(event);
        }

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }
    }
}

export default Receiver