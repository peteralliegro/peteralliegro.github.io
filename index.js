import * as THREE from './three.js-master/build/three.module.js'
import { GLTFLoader } from "./three.js-master/examples/jsm/loaders/GLTFLoader.js"
const canvas = document.querySelector(".webgl")
const scene = new THREE.Scene()

const loader = new GLTFLoader()
loader.load('assets/face3.gltf', function (gltf) {
    console.log(gltf)
    const root = gltf.scene;
    root.scale.set(0.25, 0.25, 0.25)
    root.position.y = 1
    const onMouseMove = (e) => {
        root.rotation.y = e.pageY / (window.innerWidth * 1.5);
        root.rotation.x = e.pageX / (window.innerHeight * 2);
    }
    document.addEventListener('mousemove', onMouseMove);




    scene.add(root);
}, function (xhr) {
    console.log(xhr.loaded / xhr.total * 100) + "% loaded"
}, function (error) {
    console.log('an error occured')
})


const light = new THREE.DirectionalLight(0xffffff, 1)
const hlight = new THREE.AmbientLight(0x0000FF, 1)
light.position.set(2, 2, 5)
scene.add(light, hlight)
// POO


const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
camera.position.set(0, 1, 2)
scene.add(camera)


const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(window.innerWidth, window.innerHeight / 1.5)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.updateShadowMap.enabled = true
renderer.gammaOutput = true
renderer.render(scene, camera)

function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)

}




animate()