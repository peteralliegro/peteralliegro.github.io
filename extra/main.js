const gltfLoader = new GLTFLoader();
const url = 'smushface.gltf';
gltfLoader.load(url, (gltf) => {
    const root = gltf.scene;
    scene.add(root);
});
var scene = new THREE.Scene();

scene.background = new THREE.Color(0x000000);

var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setClearColor("#e5e5e5");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})




var geometry = new THREE.SphereGeometry(1, 10, 10);
var material = new THREE.MeshLambertMaterial({
    color: 0xFFCC00
});
var mesh = new THREE.Mesh(geometry, material)
var light = new THREE.PointLight(0xFFFF, 1, 500)
light.position.set(10, 0, 25)
scene.add(light)
scene.add(mesh)
renderer.render(scene, camera)