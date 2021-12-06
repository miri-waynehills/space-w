import * as THREE from 'three'
import backgroundVertexShader from './shaders/background/vertex.glsl'
import backgroundFragmentShader from './shaders/background/fragment.glsl'
import layerVertexShader from './shaders/layer/vertex.glsl'
import layerFragmentShader from './shaders/layer/fragment.glsl'

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
// directionalLight.position.set(0, 0.25, 0)

const textureLoader = new THREE.TextureLoader()
const backgroundTexture = textureLoader.load('/images/background.jpg')
const generateBackground=(scene, gui)=>{
    const geometry = new THREE.PlaneGeometry(100, 110)
    // const material = new THREE.ShaderMaterial({
    //     vertexShader: backgroundVertexShader,
    //     fragmentShader: backgroundFragmentShader,
    //     uniforms: {
    //         uSize: {value: 5},
    //         uColor: { value: new THREE.Color('orange') },
    //         uTexture: { value: backgroundTexture }
    //     }
    // })
    const material = new THREE.MeshBasicMaterial({
        map: backgroundTexture,
        transparent: true
    })
  
    const mesh = new THREE.Mesh(geometry, material);
  
    mesh.position.set(-1,-15,0)
    scene.add(mesh);

    const meshFolder = gui.addFolder('mesh')
    meshFolder.close()
    meshFolder.add(mesh.position, 'x', -100, 100, 1).name('positionX')
    meshFolder.add(mesh.position, 'y', -100, 100, 1).name('positionY')
    meshFolder.add(mesh.position, 'z', -100, 100, 1).name('positionZ')
    meshFolder.add(mesh.rotation, 'z', -100, 100, 1).name('rotationZ')
}


//particles poc for later
const parameters = {}
parameters.count = 1000
parameters.particleColor = '#f2f2f2'
const particleTexture = textureLoader.load("/textures/particles/1.png")

const generateParticles=(scene)=>{
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(parameters.count * 3)
    const colors = new Float32Array(parameters.count * 3)
    const scales = new Float32Array(parameters.count * 1)

    const particleColor = new THREE.Color(parameters.particleColor)

    for(let i = 0; i < parameters.count; i++){
        const i3 = i * 3
        positions[i3 + 0] = (Math.random() - 0.5) * 100
        positions[i3 + 1] = (Math.random() - 0.5) * 110
        positions[i3 + 2] = (Math.random() - 0.5) * 3

        const mixedColor = particleColor.clone()

        colors[i3    ] = mixedColor.r
        colors[i3 + 1] = mixedColor.g
        colors[i3 + 2] = mixedColor.b

        scales[i] = Math.random()*0.8
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1))

    // const particleMaterial = new THREE.ShaderMaterial({
    //     // depthWrite: false,
    //     blending: THREE.AdditiveBlending,
    //     vertexColors: true,
    //     vertexShader: layerVertexShader,
    //     fragmentShader: layerFragmentShader,
    //     side: THREE.DoubleSide,
    //     uniforms: {
    //         uSize: {value: 100},
    //         uColor: { value: new THREE.Color('#ffffff') },
    //         // uTexture: { value: backgroundTexture }
    //     }
    // })

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.2,
        sizeAttenuation: true,
        color:'#f2f2f2',
        transparent: true,
        alphaMap: particleTexture,
        //alphaTest: 0.001
        //depthTest: false
        depthWrite: false,
        blending: THREE.AdditiveBlending,
        vertexColors: true
    })

    const points = new THREE.Points(geometry, particleMaterial)
    points.position.set(-32.5,21.4,1)
    scene.add(points)
}

const backgroundMusic = (audioLoader,sound) => {
    audioLoader.load( '/audio/Space.wav', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 10 );
	sound.play();
});
}

const base = [ambientLight, directionalLight]

export { base, generateBackground, backgroundMusic, generateParticles }