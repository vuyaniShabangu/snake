import {Block} from './block.js';

export class Snake {

    constructor(){
        this.board = new Array(100);
        for(var i=0; i < this.board.length; i++)
            this.board[i] = new Array(100);

        this.path = [Block(50,50), Block(49,50), Block(48,50)]
    }


    
    
}