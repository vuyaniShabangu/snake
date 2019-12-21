import {Snake} from './snake.js';

setInterval(function(){ render(); }, 1000);
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

const render = () => {

    changeToSnakeHead(50,50)
    changeToSnakeBlock(49,50)
    changeToSnakeBlock(48,50)
    changeToSnakeBlock(47,50)
    changeToSnakeBlock(46,50)
    changeToSnakeBlock(45,50)

    changeToTarget(68,68)

   
}

render();