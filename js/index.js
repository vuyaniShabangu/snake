import {Snake} from './snake.js';

setInterval(function(){ render(); }, 50);
const board = document.getElementById('board');

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



let snake = new Snake();
let direction = null;

const render = () => {
    snake.displaySnake().forEach(block => {
        changeToBlock(block.x, block.y)
    });
    snake.iterate(direction);
    direction = null;
    snake.displaySnake().forEach(block => {
        changeToSnakeBlock(block.x, block.y)
    });


    changeToTarget(68,68)

   
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

