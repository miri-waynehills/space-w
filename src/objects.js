import * as THREE from 'three'

const textureLoader = new THREE.TextureLoader()

// 0 starting scene
const tl01Texture = textureLoader.load('images/tl-01.png')
const tl01Geometry = new THREE.PlaneGeometry(15,1.3)
const tl01Material = new THREE.MeshBasicMaterial({
    map: tl01Texture,
    transparent: true
})
const tl01 = new THREE.Mesh(tl01Geometry, tl01Material);
tl01.position.set(-33,21.8,5)

const pl01Texture = textureLoader.load('images/pl-01.png')
const pl01Geometry = new THREE.PlaneGeometry(20,11)
const pl01Material = new THREE.MeshBasicMaterial({
    map: pl01Texture,
    transparent: true
})
const pl01 = new THREE.Mesh(pl01Geometry, pl01Material);
pl01.position.set(-32.5,21.4,5)
pl01.rotation.set(0,0,Math.PI)

const pl02Texture = textureLoader.load('images/pl-02.png')
const pl02Geometry = new THREE.PlaneGeometry(5,5)
const pl02Material = new THREE.MeshBasicMaterial({
    map: pl02Texture,
    transparent: true
})
const pl02 = new THREE.Mesh(pl02Geometry, pl02Material);
pl02.position.set(-42.8,18,5)

const tl02Texture = textureLoader.load('images/tl-02.png')
const tl02Geometry = new THREE.PlaneGeometry(3.5,1.6)
const tl02Material = new THREE.MeshBasicMaterial({
    map: tl02Texture,
    transparent: true
})
const tl02 = new THREE.Mesh(tl02Geometry, tl02Material);
tl02.position.set(-32.5,17.8,3)

const pl03Texture = textureLoader.load('images/pl-03.png')
const pl03Geometry = new THREE.PlaneGeometry(5,5)
const pl03Material = new THREE.MeshBasicMaterial({
    map: pl03Texture,
    transparent: true
})
const pl03 = new THREE.Mesh(pl03Geometry, pl03Material);
pl03.position.set(-24,21,3)

const tr01Texture = textureLoader.load('images/tr-01.png')
const tr01Geometry = new THREE.PlaneGeometry(5,6)
const tr01Material = new THREE.MeshBasicMaterial({
    map: tr01Texture,
    transparent: true
})
const tr01 = new THREE.Mesh(tr01Geometry, tr01Material);
tr01.position.set(-22.5,15.6,3)

// 1 core value
const ro01Texture = textureLoader.load('images/ro-01.png')
const ro01Geometry = new THREE.PlaneGeometry(1.8,1.8)
const ro01Material = new THREE.MeshBasicMaterial({
    map: ro01Texture,
    transparent: true
})
const ro01 = new THREE.Mesh(ro01Geometry, ro01Material);
ro01.position.set(-35.5,12.8,3)

const ro02Texture = textureLoader.load('images/ro-02.png')
const ro02Geometry = new THREE.PlaneGeometry(0.8,0.8)
const ro02Material = new THREE.MeshBasicMaterial({
    map: ro02Texture,
    transparent: true
})
const ro02 = new THREE.Mesh(ro02Geometry, ro02Material);
ro02.position.set(-36.7,13.2,3)
ro02.rotation.z = Math.PI*0.1

const tb01Texture = textureLoader.load('images/tb-01.png')
const tb01Geometry = new THREE.PlaneGeometry(7,4)
const rtb01Material = new THREE.MeshBasicMaterial({
    map: tb01Texture,
    transparent: true
})
const tb01 = new THREE.Mesh(tb01Geometry, rtb01Material);
tb01.position.set(-37.7,10.4,4)

const pl04Texture = textureLoader.load('images/pl-04.png')
const pl04Geometry = new THREE.PlaneGeometry(9,9)
const pl04Material = new THREE.MeshBasicMaterial({
    map: pl04Texture,
    transparent: true
})
const pl04 = new THREE.Mesh(pl04Geometry, pl04Material);
pl04.position.set(-39.6,6.5,3)
pl04.rotation.z = Math.PI*0.2

const vi01Texture = textureLoader.load('images/pl-04.png')
const vi01Geometry = new THREE.PlaneGeometry(7,4.5)
const vi01Material = new THREE.MeshBasicMaterial({
    // map: vi01Texture,
    // transparent: true,
    color: '#000000'
})
const vi01 = new THREE.Mesh(vi01Geometry, vi01Material);
vi01.position.set(-27,9,4)

const pl05Texture = textureLoader.load('images/pl-05.png')
const pl05Geometry = new THREE.PlaneGeometry(20,20)
const pl05Material = new THREE.MeshBasicMaterial({
    map: pl05Texture,
    transparent: true
})
const pl05 = new THREE.Mesh(pl05Geometry, pl05Material);
pl05.position.set(-39.6,-15,4)

const tr02Texture = textureLoader.load('images/tr-02.png')
const tr02Geometry = new THREE.PlaneGeometry(10,10)
const tr02Material = new THREE.MeshBasicMaterial({
    map: tr02Texture,
    transparent: true
})
const tr02 = new THREE.Mesh(tr02Geometry, tr02Material);
tr02.position.set(-32.5,-12,5)

const tx1CoreTexture = textureLoader.load('images/tx-1-core.png')
const tx1CoreGeometry = new THREE.PlaneGeometry(23,10)
const tx1CoreMaterial = new THREE.MeshBasicMaterial({
    map: tx1CoreTexture,
    transparent: true
})
const tx01 = new THREE.Mesh(tx1CoreGeometry, tx1CoreMaterial);
tx01.position.set(-22.3,-12,2)

//scene add
const sceneAdd = (scene, gui)=>{
    scene.add(pl01, tl01, pl02, tl02, pl03, tr01, ro01, ro02, tb01, pl04, vi01, pl05, tr02, tx01)

    // dat gui
    // const pl01Folder = gui.addFolder('pl01')
    // pl01Folder.close()
    // pl01Folder.add(pl01.position, 'x', -100, 100, 1).name('positionX')
    // pl01Folder.add(pl01.position, 'y', -100, 100, 1).name('positionY')
    // pl01Folder.add(pl01.position, 'z', -100, 100, 1).name('positionZ')
    // pl01Folder.add(pl01.rotation, 'z', -100, 100, 1).name('rotationZ')

    // const tl01Folder = gui.addFolder('tl01')
    // tl01Folder.close()
    // tl01Folder.add(tl01.position, 'x', -100, 100, 1).name('positionX')
    // tl01Folder.add(tl01.position, 'y', -100, 100, 1).name('positionY')
    // tl01Folder.add(tl01.position, 'z', -100, 100, 1).name('positionZ')
    // tl01Folder.add(tl01.rotation, 'z', -100, 100, 1).name('rotationZ')

    // const tl02Folder = gui.addFolder('tl02')
    // // tl02Folder.close()
    // tl02Folder.add(tl02.position, 'x', -100, 100, 1).name('positionX')
    // tl02Folder.add(tl02.position, 'y', -100, 100, 1).name('positionY')
    // tl02Folder.add(tl02.position, 'z', -100, 100, 1).name('positionZ')
    // tl02Folder.add(tl02.rotation, 'z', -100, 100, 1).name('rotationZ')

    // const pl02Folder = gui.addFolder('pl02')
    // pl02Folder.close()
    // pl02Folder.add(pl02.position, 'x', -100, 100, 1).name('positionX')
    // pl02Folder.add(pl02.position, 'y', -100, 100, 1).name('positionY')
    // pl02Folder.add(pl02.position, 'z', -100, 100, 1).name('positionZ')
    // pl02Folder.add(pl02.rotation, 'z', -100, 100, 1).name('rotationZ')

    // const pl03Folder = gui.addFolder('pl03')
    // pl03Folder.close()
    // pl03Folder.add(pl03.position, 'x', -100, 100, 1).name('positionX')
    // pl03Folder.add(pl03.position, 'y', -100, 100, 1).name('positionY')
    // pl03Folder.add(pl03.position, 'z', -100, 100, 1).name('positionZ')
    // pl03Folder.add(pl03.rotation, 'z', -100, 100, 1).name('rotationZ')

    // const tr01Folder = gui.addFolder('tr01')
    // tr01Folder.close()
    // tr01Folder.add(tr01.position, 'x', -100, 100, 1).name('positionX')
    // tr01Folder.add(tr01.position, 'y', -100, 100, 1).name('positionY')
    // tr01Folder.add(tr01.position, 'z', -100, 100, 1).name('positionZ')
    // tr01Folder.add(tr01.rotation, 'z', -100, 100, 1).name('rotationZ')

    const ro01Folder = gui.addFolder('ro01')
    ro01Folder.close()
    ro01Folder.add(ro01.position, 'x', -100, 100, 1).name('positionX')
    ro01Folder.add(ro01.position, 'y', -100, 100, 1).name('positionY')
    ro01Folder.add(ro01.position, 'z', -100, 100, 1).name('positionZ')
    ro01Folder.add(ro01.rotation, 'z', -100, 100, 1).name('rotationZ')

    const ro02Folder = gui.addFolder('ro02')
    ro02Folder.close()
    ro02Folder.add(ro02.position, 'x', -100, 100, 1).name('positionX')
    ro02Folder.add(ro02.position, 'y', -100, 100, 1).name('positionY')
    ro02Folder.add(ro02.position, 'z', -100, 100, 1).name('positionZ')
    ro02Folder.add(ro02.rotation, 'z', -100, 100, 1).name('rotationZ')

    const pl04Folder = gui.addFolder('pl04')
    pl04Folder.close()
    pl04Folder.add(pl04.position, 'x', -100, 100, 1).name('positionX')
    pl04Folder.add(pl04.position, 'y', -100, 100, 1).name('positionY')
    pl04Folder.add(pl04.position, 'z', -100, 100, 1).name('positionZ')
    pl04Folder.add(pl04.rotation, 'z', -100, 100, 1).name('rotationZ')

    const tb01Folder = gui.addFolder('tb01')
    tb01Folder.close()
    tb01Folder.add(tb01.position, 'x', -100, 100, 1).name('positionX')
    tb01Folder.add(tb01.position, 'y', -100, 100, 1).name('positionY')
    tb01Folder.add(tb01.position, 'z', -100, 100, 1).name('positionZ')
    tb01Folder.add(tb01.rotation, 'z', -100, 100, 1).name('rotationZ')

    const vi01Folder = gui.addFolder('vi01')
    vi01Folder.close()
    vi01Folder.add(vi01.position, 'x', -100, 100, 1).name('positionX')
    vi01Folder.add(vi01.position, 'y', -100, 100, 1).name('positionY')
    vi01Folder.add(vi01.position, 'z', -100, 100, 1).name('positionZ')
    vi01Folder.add(vi01.rotation, 'z', -100, 100, 1).name('rotationZ')

    const pl05Folder = gui.addFolder('pl05')
    pl05Folder.close()
    pl05Folder.add(pl05.position, 'x', -100, 100, 1).name('positionX')
    pl05Folder.add(pl05.position, 'y', -100, 100, 1).name('positionY')
    pl05Folder.add(pl05.position, 'z', -100, 100, 1).name('positionZ')
    pl05Folder.add(pl05.rotation, 'z', -100, 100, 1).name('rotationZ')

    const tr02Folder = gui.addFolder('tr02')
    tr02Folder.close()
    tr02Folder.add(tr02.position, 'x', -100, 100, 1).name('positionX')
    tr02Folder.add(tr02.position, 'y', -100, 100, 1).name('positionY')
    tr02Folder.add(tr02.position, 'z', -100, 100, 1).name('positionZ')
    tr02Folder.add(tr02.rotation, 'z', -100, 100, 1).name('rotationZ')

    const tx01Folder = gui.addFolder('tx01')
    // tx01Folder.close()
    tx01Folder.add(tx01.position, 'x', -100, 100, 1).name('positionX')
    tx01Folder.add(tx01.position, 'y', -100, 100, 1).name('positionY')
    tx01Folder.add(tx01.position, 'z', -100, 100, 1).name('positionZ')
    tx01Folder.add(tx01.rotation, 'z', -100, 100, 1).name('rotationZ')
}

const clock = new THREE.Clock();
function animateObject(){
    const elapsedTime = clock.getElapsedTime()
    // tunnelParticles.rotation.y = elapsedTime*2
}

export {sceneAdd, animateObject}