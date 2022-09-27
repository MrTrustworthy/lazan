import * as Three from 'three'
import Receiver from "./receiver"

class GameScreen {

    constructor(container) {

        let camera = new Three.PerspectiveCamera(70, 4 / 3, 0.01, 10);
        camera.position.z = 1;

        let scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        let mesh = new Three.Mesh(geometry, material);
        scene.add(mesh);

        let renderer = new Three.WebGLRenderer({antialias: true});
        renderer.setSize(600, 400);
        //let container = document.getElementById('main-canvas');
        container.appendChild(renderer.domElement);

        function animate() {
            requestAnimationFrame(animate);
            //console.log("render element " + container)
            mesh.rotation.x += 0.01;
            //mesh.rotation.y += 0.02;
            renderer.render(scene, camera);

        }

        animate()

        this.connection = new WebSocket("ws://localhost:8080")

        this.connection.onmessage = function (event) {
            console.log(event);
        }

        this.connection.onopen = function (event) {
            console.log(event)
            console.log("Successfully connected to the echo websocket server...")
        }

    }


}

export default GameScreen