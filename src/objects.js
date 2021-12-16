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

const tx01Texture = textureLoader.load('images/tx-01.png')
const tx01Geometry = new THREE.PlaneGeometry(3.5,1.6)
const tx01Material = new THREE.MeshBasicMaterial({
    map: tx01Texture,
    transparent: true
})
const tx01 = new THREE.Mesh(tx01Geometry, tx01Material);
tx01.position.set(-32.5,17.8,3)

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

// 0 intro
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

// 1 core value
const tl02Texture = textureLoader.load('images/tl-02-core.png')
const tl02Geometry = new THREE.PlaneGeometry(1,1)
const tl02Material = new THREE.MeshBasicMaterial({
    map: tl02Texture,
    transparent: true
})
const tl02 = new THREE.Mesh(tl02Geometry, tl02Material);
tl02.position.set(-29.5,-6,5)
tl02.scale.set(12,2.3)

const pl05Texture = textureLoader.load('images/pl-05.png')
const pl05Geometry = new THREE.PlaneGeometry(30,30)
const pl05Material = new THREE.MeshBasicMaterial({
    map: pl05Texture,
    transparent: true
})
const pl05 = new THREE.Mesh(pl05Geometry, pl05Material);
pl05.position.set(-40,-18,4)

const tr02Texture = textureLoader.load('images/tr-02.png')
const tr02Geometry = new THREE.PlaneGeometry(10,10)
const tr02Material = new THREE.MeshBasicMaterial({
    map: tr02Texture,
    transparent: true
})
const tr02 = new THREE.Mesh(tr02Geometry, tr02Material);
tr02.position.set(-27,-13,5)

const tx2CoreTexture = textureLoader.load('images/tx-02-core.png')
const tx2CoreGeometry = new THREE.PlaneGeometry(23,10)
const tx2CoreMaterial = new THREE.MeshBasicMaterial({
    map: tx2CoreTexture,
    transparent: true
})
const tx02 = new THREE.Mesh(tx2CoreGeometry, tx2CoreMaterial);
tx02.position.set(-18,-13,2)

const ro03Texture = textureLoader.load('images/ro-03.png')
const ro03Geometry = new THREE.PlaneGeometry(5,5)
const ro03Material = new THREE.MeshBasicMaterial({
    map: ro03Texture,
    transparent: true
})
const ro03 = new THREE.Mesh(ro03Geometry, ro03Material);
ro03.position.set(-13,-6,2)
ro03.rotation.z = Math.PI*0.1

const ro04Texture = textureLoader.load('images/ro-02.png')
const ro04Geometry = new THREE.PlaneGeometry(1,1)
const ro04Material = new THREE.MeshBasicMaterial({
    map: ro04Texture,
    transparent: true
})
const ro04 = new THREE.Mesh(ro04Geometry, ro04Material);
ro04.position.set(-9,-9.8,2)
ro04.scale.set(1,1)

// 2 team
const tr03Texture = textureLoader.load('images/tr-03.png')
const tr03Geometry = new THREE.PlaneGeometry(1,1)
const tr03Material = new THREE.MeshBasicMaterial({
    map: tr03Texture,
    transparent: true
})
const tr03 = new THREE.Mesh(tr03Geometry, tr03Material);
tr03.position.set(1,0,5)
tr03.scale.set(15,15)

const tx3CoreTexture = textureLoader.load('images/tx-03-team.png')
const tx3CoreGeometry = new THREE.PlaneGeometry(1,1)
const tx3CoreMaterial = new THREE.MeshBasicMaterial({
    map: tx3CoreTexture,
    transparent: true
})
const tx03 = new THREE.Mesh(tx3CoreGeometry, tx3CoreMaterial);
tx03.position.set(-10,2.5,3)
tx03.scale.set(7,1)

const tl3CoreTexture = textureLoader.load('images/tl-03-team.png')
const tl3CoreGeometry = new THREE.PlaneGeometry(1,1)
const tl3CoreMaterial = new THREE.MeshBasicMaterial({
    map: tl3CoreTexture,
    transparent: true
})
const tl03 = new THREE.Mesh(tl3CoreGeometry, tl3CoreMaterial);
tl03.position.set(-3.5,4.5,4)
tl03.scale.set(12,3.5)

const vi02Texture = textureLoader.load('images/pl-04.png')
const vi02Geometry = new THREE.PlaneGeometry(7,4.5)
const vi02Material = new THREE.MeshBasicMaterial({
    // map: vi01Texture,
    // transparent: true,
    color: '#000000'
})
const vi02 = new THREE.Mesh(vi02Geometry, vi02Material);
vi02.position.set(1,12,3)

//scene add
const sceneAdd = (scene, gui)=>{
    scene.add(
        pl01, tl01, pl02, tx01, pl03, tr01, ro01, ro02, tb01, 
        tl02, pl04, vi01, pl05, tr02, tx02, ro03, ro04,
        tr03, tx03, tl03, vi02
    )
    const tl02Folder = gui.addFolder('tl02')
    tl02Folder.close()
    tl02Folder.add(tl02.position, 'x', -100, 100, 1).name('positionX')
    tl02Folder.add(tl02.position, 'y', -100, 100, 1).name('positionY')
    tl02Folder.add(tl02.position, 'z', -100, 100, 1).name('positionZ')
    tl02Folder.add(tl02.rotation, 'z', -100, 100, 1).name('rotationZ')
    tl02Folder.add(tl02.scale, 'x', -100, 100, 1).name('scaleX')
    tl02Folder.add(tl02.scale, 'y', -100, 100, 1).name('scaleY')

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

    const tx02Folder = gui.addFolder('tx02')
    tx02Folder.close()
    tx02Folder.add(tx02.position, 'x', -100, 100, 1).name('positionX')
    tx02Folder.add(tx02.position, 'y', -100, 100, 1).name('positionY')
    tx02Folder.add(tx02.position, 'z', -100, 100, 1).name('positionZ')
    tx02Folder.add(tx02.rotation, 'z', -100, 100, 1).name('rotationZ')

    const ro03Folder = gui.addFolder('ro03')
    ro03Folder.close()
    ro03Folder.add(ro03.position, 'x', -100, 100, 1).name('positionX')
    ro03Folder.add(ro03.position, 'y', -100, 100, 1).name('positionY')
    ro03Folder.add(ro03.position, 'z', -100, 100, 1).name('positionZ')
    ro03Folder.add(ro03.rotation, 'z', -100, 100, 1).name('rotationZ')

    const ro04Folder = gui.addFolder('ro04')
    ro04Folder.close()
    ro04Folder.add(ro04.position, 'x', -100, 100, 1).name('positionX')
    ro04Folder.add(ro04.position, 'y', -100, 100, 1).name('positionY')
    ro04Folder.add(ro04.position, 'z', -100, 100, 1).name('positionZ')
    ro04Folder.add(ro04.rotation, 'z', -100, 100, 1).name('rotationZ')
    ro04Folder.add(ro04.scale, 'x', -100, 100, 1).name('scaleX')
    ro04Folder.add(ro04.scale, 'y', -100, 100, 1).name('scaleY')

    const tr03Folder = gui.addFolder('tr03')
    tr03Folder.close()
    tr03Folder.add(tr03.position, 'x', -100, 100, 1).name('positionX')
    tr03Folder.add(tr03.position, 'y', -100, 100, 1).name('positionY')
    tr03Folder.add(tr03.position, 'z', -100, 100, 1).name('positionZ')
    tr03Folder.add(tr03.rotation, 'z', -100, 100, 1).name('rotationZ')
    tr03Folder.add(tr03.scale, 'x', -100, 100, 1).name('scaleX')
    tr03Folder.add(tr03.scale, 'y', -100, 100, 1).name('scaleY')

    const tx03Folder = gui.addFolder('tx03')
    tx03Folder.close()
    tx03Folder.add(tx03.position, 'x', -100, 100, 1).name('positionX')
    tx03Folder.add(tx03.position, 'y', -100, 100, 1).name('positionY')
    tx03Folder.add(tx03.position, 'z', -100, 100, 1).name('positionZ')
    tx03Folder.add(tx03.rotation, 'z', -100, 100, 1).name('rotationZ')
    tx03Folder.add(tx03.scale, 'x', -100, 100, 1).name('scaleX')
    tx03Folder.add(tx03.scale, 'y', -100, 100, 1).name('scaleY')

    const tl03Folder = gui.addFolder('tl03')
    tl03Folder.close()
    tl03Folder.add(tl03.position, 'x', -100, 100, 1).name('positionX')
    tl03Folder.add(tl03.position, 'y', -100, 100, 1).name('positionY')
    tl03Folder.add(tl03.position, 'z', -100, 100, 1).name('positionZ')
    tl03Folder.add(tl03.rotation, 'z', -100, 100, 1).name('rotationZ')
    tl03Folder.add(tl03.scale, 'x', -100, 100, 1).name('scaleX')
    tl03Folder.add(tl03.scale, 'y', -100, 100, 1).name('scaleY')

    const vi02Folder = gui.addFolder('vi02')
    vi02Folder.close()
    vi02Folder.add(vi02.position, 'x', -100, 100, 1).name('positionX')
    vi02Folder.add(vi02.position, 'y', -100, 100, 1).name('positionY')
    vi02Folder.add(vi02.position, 'z', -100, 100, 1).name('positionZ')
}

const clock = new THREE.Clock();
function animateObject(){
    const elapsedTime = clock.getElapsedTime()
    // tunnelParticles.rotation.y = elapsedTime*2
}

export {sceneAdd, animateObject}