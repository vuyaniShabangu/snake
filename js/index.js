setInterval(function(){ render(); }, 500);

const board = document.getElementById('board');

const render = () => {
    board.innerHTML =  new Date();
}