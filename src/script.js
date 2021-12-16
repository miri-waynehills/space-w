import './style.css'
import * as THREE from 'three'
import * as dat from 'lil-gui'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as environment from './environment.js'
import * as animation from './mouse-animation.js'
import * as objects from './objects.js'

const scene = new THREE.Scene()
scene.background = new THREE.Color('#000000')
const sizes = { width: window.innerWidth, height: window.innerHeight}

const renderer = new THREE.WebGLRenderer();
renderer.setSize( sizes.width, sizes.height );
document.body.appendChild( renderer.domElement );

const mouse = new THREE.Vector2()
const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    1000
)
camera.position.set(-32.5,21.5,12)

let cameraPosition = camera.position
let cameraRotation = camera.rotation
let doesMusicPlaying = false

const textureLoader = new THREE.TextureLoader()
const rocketTexture = textureLoader.load('images/rocket.png')
const rocketGeometry = new THREE.PlaneGeometry(1.5,1.5)
const rocketMaterial = new THREE.MeshBasicMaterial({
    map: rocketTexture,
    transparent: true
})
const rocket = new THREE.Mesh(rocketGeometry, rocketMaterial);
rocket.position.set(-32.5,21.5,3)
rocket.rotation.set(0,0,0)
scene.add(rocket)

//3d rocket poc
// const gltfLoader = new GLTFLoader();
// const rocketURL = "models/rocket/viper_test.gltf";
// let mixer = null

// gltfLoader.load( rocketURL, ( gltf ) => {
//     gltf.scene.position.set(-32.5,20,3)
//     gltf.scene.rotation.set(0,-Math.PI*0.5,Math.PI*0.5)
//     gltf.scene.scale.set(0.1,0.1,0.1)
//     scene.add( gltf.scene );

//     mixer = new THREE.AnimationMixer(gltf.scene)
//     const action = mixer.clipAction(gltf.animations[0])
//     action.play()
// })

function onWindowResize() {
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    render()
}

function move(evt){
    mouse.x = (evt.touches) ? evt.touches[0].clientX : evt.clientX;
    mouse.y = (evt.touches) ? evt.touches[0].clientY : evt.clientY;
}

function playMusic(){
    if(doesMusicPlaying != true){
        environment.backgroundMusic(audioLoader, backgroundSound)
        doesMusicPlaying = true
    }
}

window.addEventListener('resize', onWindowResize, false)
window.addEventListener("wheel", animation.onMouseWheel)
window.addEventListener("click", function(){
    playMusic()
});
// window.addEventListener('touchmove', move);

// let mousewheelCounter = 0;
// let scrollAmount = 0;
// window.addEventListener('wheel', function(){
//     mousewheelCounter++
//     if(mousewheelCounter=6){
//         scrollAmount = scrollAmount+1
//         scrollAmount++
//     }
//     console.log(mousewheelCounter,scrollAmount);
// });

// let mouseCounter = 0;
// window.addEventListener('scroll', function(){
//     mouseCounter++
//     console.log(mouseCounter);
// });

if ('ontouchstart' in window){
    window.addEventListener('touchmove', move);
  }else{
    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX / sizes.width *2-1
        mouse.y = -(event.clientY / sizes.height) *2+1 
    })
}

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const gui = new dat.GUI()
const cameraFolder = gui.addFolder('Camera')
cameraFolder.close()
cameraFolder.add(cameraPosition, 'x', -100, 100, 0.001).name('positionX')
cameraFolder.add(cameraPosition, 'y', -100, 100, 0.001).name('positionY')
cameraFolder.add(cameraPosition, 'z', -100, 100, 0.001).name('positionZ')
cameraFolder.add(cameraRotation, 'z', -100, 100, 0.001).name('rotationZ')

const listener = new THREE.AudioListener();
camera.add( listener );
const backgroundSound = new THREE.PositionalAudio( listener );
const audioLoader = new THREE.AudioLoader();

environment.base.map(x => {scene.add(x)})
environment.generateBackground(scene, gui)
environment.generateParticles(scene)
objects.sceneAdd(scene, gui)

const clock = new THREE.Clock()
let previousTime = 0

function animate() {
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // if(mixer){
    //     mixer.update(deltaTime)
    // }

    rocket.position.x = camera.position.x
    rocket.position.y = camera.position.y-2

    objects.animateObject()
    animation.mousePositionUpdate()
    animation.mousePositionReset()
    animation.cameraPositionUpdate(cameraPosition, cameraRotation)

    requestAnimationFrame(animate)
    render()
}

function render() {
    renderer.render(scene, camera)
}

animate()