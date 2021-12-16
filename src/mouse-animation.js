import gsap from 'gsap'

let mousePosition = 0
let updatePosition = 0
let scrollAmount = 0
let scroll = false

function countScroll() {
    if (scroll == true && mousePosition<0){
      scrollAmount --
      if (scrollAmount<0){
        scrollAmount = 0
      }
    } else if(scroll == true && 0<mousePosition) {
      scrollAmount ++
    }
  // console.log(scrollAmount);
}

function onMouseWheel(event) {
    mousePosition = event.deltaY * 0.0007
    // mouseSpeedUpdate()
    console.log(scrollAmount);
    scroll = false
    setTimeout(() => {scroll = true, countScroll()}, 0.0001);
}

function mousePositionUpdate() {
    updatePosition += mousePosition
    mousePosition *= 0.9
}

function mousePositionReset() {
    if (updatePosition < 0) {
        updatePosition = 0
        mousePosition = 0
        //여유되면 please scroll oposit direction to charge fuel 같은 문구 추가
    }
}

function cameraPositionUpdate( cameraPosition, cameraRotation) {

  if( scrollAmount==0){
    gsap.to(cameraPosition, { x: -32.5, y: 21.5, duration: 1 })
  }
  else if (0<scrollAmount && scrollAmount<=10){
    gsap.to(cameraPosition, { x: -32.5, y: 18, duration: 1 });
  }
  else if (10<scrollAmount && scrollAmount<=20){
    gsap.to(cameraPosition, { x: -32.5, y: 9, duration: 1 });
  }
  else if (20<scrollAmount && scrollAmount<=30){
    gsap.to(cameraPosition, { x: -31.5, y: 4, duration: 1 });
  }
  else if (30<scrollAmount && scrollAmount<=40){
    gsap.to(cameraPosition, { x: -30, y: 0, duration: 1 });
  }
  else if (40<scrollAmount && scrollAmount<=50){
    gsap.to(cameraPosition, { x: -29, y: -1, duration: 1 });
  }
  else if (50<scrollAmount && scrollAmount<=60){
    gsap.to(cameraPosition, { x: -27, y: -7.5, duration: 2 })
  }
  else if (60<scrollAmount && scrollAmount<=70){
    gsap.to(cameraPosition, { x: -19, y: -11.5, duration: 2 })
  }
  else if (70<scrollAmount && scrollAmount<=80){
    gsap.to(cameraPosition, { x: -11, y: -9, duration: 1 })
  }
  else if (80<scrollAmount && scrollAmount<=90){
    gsap.to(cameraPosition, { x: -9, y: -4, duration: 1 })
  }
  else if (90<scrollAmount && scrollAmount<=100){
    gsap.to(cameraPosition, { x: -5.5, y: -1, duration: 1 })
  }
  else if (100<scrollAmount && scrollAmount<=110){
    gsap.to(cameraPosition, { x: -4.5, y: 2, duration: 1 })
  }
  else if (110<scrollAmount && scrollAmount<=120){
    gsap.to(cameraPosition, { x: -5, y: 9, duration: 1 })
  }
  else if (120<scrollAmount && scrollAmount<=130){
    gsap.to(cameraPosition, { x: -4.5, y: 16, duration: 1 })
  }

}

export { onMouseWheel, mousePositionUpdate, mousePositionReset, cameraPositionUpdate }