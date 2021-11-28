let moving = false;
let temp = "";

function moveStart(event){
    moving = true;
    temp = document.getElementById(event.target.id);
    temp.style.position = 'absolute';
    temp.style.border="3px dotted black";
}

function moveStop(){
    moving = false;
    //temp.style.position = 'relative';
    temp.style.border="";
    temp = '';
}

function move(e){   
    let x = e.clientX-(temp.offsetWidth/2);
    let y = e.clientY-(temp.offsetHeight/2);
    if(moving){
        temp.style.top = y+'px';
        temp.style.left = x+'px';
    }
}

window.addEventListener('mousedown', moveStart);
window.addEventListener("mouseup", moveStop);
window.addEventListener('mousemove', move);