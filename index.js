const cube = document.querySelector('#cube');
const button = document.querySelector('#patata');

let isBig = false;

function changeSize(){
    isBig = !isBig;

    if(isBig){
        cube.object3D.scale.set(0.8,0.8,0.8);
    } else {
        cube.object3D.scale.set(0.4,0.4,0.4);
    }
}

button.addEventListener('click', changeSize);