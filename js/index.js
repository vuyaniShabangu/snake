import {Snake} from './snake.js';


let snake = new Snake();
let direction = null;
const board = document.getElementById('board');

let interval = setInterval(function(){ render(); console.log(snake.getInterval())}, snake.getInterval());

const render = () => {
    snake.displaySnake().forEach(block => {
        changeToBlock(block.x, block.y)
    });
    snake.iterate(direction);
    direction = null;
    snake.displaySnake().map(block => {
        if(block.type === "head")
            changeToSnakeHead(block.x, block.y)
        else
            changeToSnakeBlock(block.x, block.y)
    });
    snake.displayTarget()

    changeToTarget(snake.displayTarget().x, snake.displayTarget().y)
    clearInterval(interval);
    interval = setInterval(function(){ render(); console.log(snake.getInterval())}, snake.getInterval());
}



const changeToBlock =(x,y) => {
    document.getElementById(x+","+y).className = "block";
}

const changeToSnakeBlock =(x,y) => {
    document.getElementById(x+","+y).className = "snake-block";
}

const changeToSnakeHead =(x,y) => {
    document.getElementById(x+","+y).className = "snake-head";
}

const changeToTarget =(x,y) => {
    document.getElementById(x+","+y).className = "target";
}


document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        direction = "up";
    }
    else if (e.keyCode == '40') {
        direction = "down";
    }
    else if (e.keyCode == '37') {
        direction = "left";
    }
    else if (e.keyCode == '39') {
        direction = "right";
    }

}

document.getElementById('up').onclick = (a=>{direction="up"});
document.getElementById('down').onclick = (a=>{direction="down"})
document.getElementById('left').onclick = (a=>{direction="left"})
document.getElementById('right').onclick = (a=>{direction="right"})