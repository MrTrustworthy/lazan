import * as Three from 'three'
import Receiver from "./receiver"

class GameScreen {

    camera = null;

    width = 800;
    height = 600;

    constructor(container) {

        let r = new Receiver();

        this.camera = new Three.PerspectiveCamera(70, this.width / this.height, 0.01, 10);
        this.camera.position.z = 4;
        this.camera.lookAt(0, 0, 0)

        let scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        let mesh = new Three.Mesh(geometry, material);
        scene.add(mesh);


        const axesHelper = new Three.AxesHelper(5);
        scene.add(axesHelper);

        let renderer = new Three.WebGLRenderer({antialias: true});
        renderer.setSize(this.width, this.height);
        container.appendChild(renderer.domElement);


        const planeGeom = new Three.PlaneGeometry(5, 5);
        const planeMat = new Three.MeshBasicMaterial({color: 0x2255aa, side: Three.DoubleSide});
        const plane = new Three.Mesh(planeGeom, planeMat);
        scene.add(plane);


        let cam = this.camera;

        function animate() {
            requestAnimationFrame(animate);
            //console.log("render element " + container)
            mesh.rotation.x += 0.01;
            mesh.rotation.y += 0.02;
            renderer.render(scene, cam);

        }

        animate()

        document.addEventListener('keydown', this.moveCamera.bind(this));


        let onDocumentMouseDown = (event) => {
            event.preventDefault();

            //console.log(event)
            let raycaster = new Three.Raycaster();
            let pointer = new Three.Vector2();
            pointer.x = (event.layerX / this.width) * 2 - 1;
            pointer.y = -(event.layerY / this.height) * 2 + 1;

            this.camera.updateMatrixWorld();
            raycaster.setFromCamera(pointer, this.camera);


            const intersects = raycaster.intersectObjects([mesh], false);


            if (intersects.length > 0) {
                console.log(`[${event.layerX}/${event.layerY}] yayyy`, intersects)
            } else {
                console.log(`[${event.layerX}/${event.layerY}] :(((`)
            }


        }


        container.addEventListener('mousedown', onDocumentMouseDown);


    }

    moveCamera(evt) {

        switch (evt.key) {
            case "a":
                this.camera.position.x -= 0.1;
                break;
            case "d":
                this.camera.position.x += 0.1;
                break;
            case "w":
                this.camera.position.y += 0.1;
                break;
            case "s":
                this.camera.position.y -= 0.1;
                break;
            case "q":
                this.camera.rotateX(0.1);
                break;
            case "e":
                this.camera.rotateX(-0.1);
                break;
        }

    }
}

export default GameScreen