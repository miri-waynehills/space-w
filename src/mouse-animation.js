let mousePosition = 0
let updatePosition = 0

function onMouseWheel(event) {
    console.log(updatePosition);
    mousePosition = event.deltaY * 0.005
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
      if(0 <= updatePosition) {
        if( updatePosition < 23){
            if (updatePosition < 0.1) {
                cameraPosition.set(-32.5,21.5,12)
            }
              cameraPosition.y -= mousePosition*0.5
          }
          else if (updatePosition < 50){
            if (updatePosition < 23.1) {
                cameraPosition.set(-32.5, 8.27, 12)
            }
            cameraPosition.y -= mousePosition*0.5
            cameraPosition.x += mousePosition*0.05
          }
          else if (updatePosition < 100){
            if (updatePosition < 50.1) {
                console.log(cameraPosition);
                // cameraPosition.set(-32.5, 8.27, 12)
            }
            cameraPosition.y -= mousePosition*0.5
            cameraPosition.x += mousePosition*0.1
          }
        //   else if (91 < updatePosition) {
        //       updatePosition = 0
        //       cameraPosition.set(0, 1, 0)
        //   }
      }
  }

export { onMouseWheel, mousePositionUpdate, mousePositionReset, cameraPositionUpdate }