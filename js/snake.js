import {Block} from './block.js';

export class Snake {

    constructor(){
        this.board = new Array(100);
        for(var i=0; i < this.board.length; i++)
            this.board[i] = new Array(100);

        this.board.map( column => { new Array(100) } )
        
        /*for(var x=0; x < this.board.length; x++)
        {
            for(var y=0; y < this.board.length; y++)
            {
                this.board[x][y] = 'x';
            }
        }*/


        this.path = [new Block(50,50), new Block(49,50), new Block(48,50)];

        this.direction = "right";

        this.plotPath()
    }

    plotPath(){
        this.path.forEach( block => this.board[block.x][block.y] = block )
    }

    displaySnake(){
        return this.path;
    }

    changeDirection(dir){
        this.direction = dir;
    }

    iterate(){
        if(this.direction === "left")
            this.moveLeft()
        if(this.direction === "right")
            this.moveRight()
        if(this.direction === "up")
            this.moveUp()
        if(this.direction === "down")
            this.moveDown()
    }

    moveUp(){
        this.path.map( block => block.y++ )
    }
    moveDown(){
        this.path.map( block => block.y-- )
    }
    moveLeft(){
        this.path.map( block => block.x-- )
    }
    moveRigt(){
        this.path.map( block => block.x++ )
    }

    
}