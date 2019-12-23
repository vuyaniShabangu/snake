import {Block} from './block.js';
import {Pivot} from './pivot.js';
import {Target} from './target.js';


export class Snake {

    constructor(){
        this.board = new Array(100);
        for(var i=0; i < this.board.length; i++)
            this.board[i] = new Array(100);
        this.board.map( column => { new Array(100) } )
        this.direction = "right";
        this.path = [new Block(50,50,this.direction,"head"), new Block(49,50,this.direction), new Block(48,50,this.direction), new Block(47,50,this.direction), new Block(46,50,this.direction), new Block(45,50,this.direction, "tail")];
        this.plotPath()
        this.pivots = new Array();
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

    growSnake(){
        let length = this.path.length;
        let block = new Block(this.path[length-1].x,this.path[length-1].y,this.path[length-1].direction,this.path[length-1].type);
        if(this.path[length-1].direction === "up")
            block.y--

        this.path[length-1].type = "snakeBody";
        this.path.push( block );
    }

    iterate(direction){
        if(direction)
        {
            this.direction = direction;
            this.pivots.push(new Pivot(this.path[0].x, this.path[0].y, direction));
        }
        this.path.map(block => {this.move(block)});
    }

    move(block){
        if(block.type === "head" )
        {
            block.direction = this.direction
            block = this.moveToCurrentDirection(block)
        }
        else{
            
            let removeFirstPivot = false;
            if(this.pivots.length === 0)
            {
                    block = this.moveToCurrentDirection(block)
            }
            else{
                
                this.pivots.map(pivot => {
                    if(pivot.x === block.x && pivot.y === block.y)
                    {
                        block.direction = pivot.direction;
                        if(block.type === "tail")
                            removeFirstPivot = true;
                    }                
            });
                block = this.moveToCurrentDirection(block);
                if(removeFirstPivot)this.pivots.shift() 
            }
        }
        return block;
    }


    moveToCurrentDirection(block){
        if(block.direction === "left" )
            {
                block = this.moveLeft(block)
            }
            if(block.direction === "right")
            {
                block = this.moveRight(block)
            }
            if(block.direction === "up")
            {
                block = this.moveUp(block)
            }
            if(block.direction === "down")
            {
                block = this.moveDown(block)
            }

            return block;
    }

    moveToPivotDirection(block, pivotDirection){
            if(pivotDirection === "left")
            {
                block = this.moveLeft(block)
            }
            if(pivotDirection === "right")
            {
                block = this.moveRight(block)
            }
            if(pivotDirection === "up")
            {
                block = this.moveUp(block)
            }
            if(pivotDirection === "down")
            {
                block = this.moveDown(block)
            }
            block.direction = pivotDirection;
            return block;
    }

    moveUp(block){
        block.y = Math.abs((block.y-1 + 100)%100)
        return block;
    }

    moveDown(block){
        block.y = Math.abs((block.y+1)%100)
        return block;
    }

    moveLeft(block){
        block.x = Math.abs((block.x-1 + 100)%100)
        return block;
    }

    moveRight(block){
        block.x = Math.abs((block.x+1)%100)
        return block;
    }

    
}