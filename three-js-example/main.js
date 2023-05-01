import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(2);
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 20 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(3, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: 'green',
});
const sphere = new THREE.Mesh(geometry, material);

scene.add( sphere );

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 4;

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

renderer.render( scene, camera );

window.addEventListener('resize', () => {
    camera.updateProjectionMatrix();
    camera.aspect = window.innerWidth / window.innerHeight;

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.render( scene, camera );
});


(function loop() {
    controls.update();
    renderer.render( scene, camera );
    requestAnimationFrame(loop);
})();