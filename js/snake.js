import {Block} from './block.js';

export class Snake {

    constructor(){
        this.board = new Array(100);
        for(var i=0; i < this.board.length; i++)
            this.board[i] = new Array(100);

        this.board.map( column => { new Array(100) } )
        
        this.path = [new Block(50,50), new Block(49,50), new Block(48,50), new Block(47,50), new Block(46,50), new Block(45,50)];

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

    iterate(direction){
        if(direction)
        {
            if(direction === "left")
                this.moveLeft()
            if(direction === "right")
                this.moveRight()
            if(direction === "up")
                this.moveUp()
            if(direction === "down")
                this.moveDown()
        }

        if(!direction)
        {
            if(this.direction === "left")
                this.moveLeft()
            if(this.direction === "right")
                this.moveRight()
            if(this.direction === "up")
                this.moveUp()
            if(this.direction === "down")
                this.moveDown()
        }
    }

    moveUp(){
        this.path.map( block => block.y = Math.abs((block.y-1 + 100)%100) )
        this.direction = "up";
    }
    moveDown(){
        this.path.map( block => block.y = Math.abs((block.y+1)%100) )
        this.direction = "down";
    }
    moveLeft(){
        this.path.map( block => block.x = Math.abs((block.x-1 + 100)%100) )
        this.direction = "left";
    }
    moveRight(){
        this.path.map( block => block.x = Math.abs((block.x+1)%100) )
        this.direction = "right";
    }

    
}