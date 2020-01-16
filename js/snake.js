import {Block} from './block.js';
import {Pivot} from './pivot.js';
import {Target} from './target.js';


export class Snake {

    constructor(){
        this.board = new Array(30);
        for(var i=0; i < this.board.length; i++)
            this.board[i] = new Array(30);
        this.board.map( column => { new Array(30) } )
        this.direction = "right";
        this.path = [new Block(15,15,this.direction,"head"), new Block(14,15,this.direction), new Block(13,15,this.direction), new Block(12,15,this.direction), new Block(11,15,this.direction), new Block(10,15,this.direction, "tail")];
        this.plotPath()
        this.pivots = new Array();
        this.target = new Target(0,0,"");
        this.interval = 100;
    }

    plotPath(){
        this.path.forEach( block => this.board[block.x][block.y] = block )
    }

    displayTarget(){
        return this.target;
    }

    displaySnake(){
        return this.path;
    }

    getInterval(){
        return this.interval;
    }

    changeDirection(dir){
        this.direction = dir;
    }

    reduceInterval(){
        if(this.interval-5 >= 20)
            this.interval -= 2;
    }

    growSnake(){
        let length = this.path.length;
        let tail = {...this.path[length - 1]};
        this.path[length - 1].type = "snakeBody";

        if(tail.direction === "up")
            tail.y++
        if(tail.direction === "down")
            tail.y--
        if(tail.direction === "right")
            tail.x--
        if(tail.direction === "left")
            tail.x++
        this.path.push(tail);
    }

    isTargetHit(head, target){
        return (head.x === target.x && head.y === target.y);
    }

    isValidDirectionChange(headDirection, newDirection){
        let valid = true;
        if(headDirection === "up" && newDirection === "down")
            valid = false;
        if(headDirection === "down" && newDirection === "up")
            valid = false;
        if(headDirection === "left" && newDirection === "right")
            valid = false;
        if(headDirection === "right" && newDirection === "left")
            valid = false;
        
        if(headDirection === "up" && newDirection === "down")
            valid = false;
        if(headDirection === "down" && newDirection === "up")
            valid = false;
        if(headDirection === "left" && newDirection === "right")
            valid = false;
        if(headDirection === "right" && newDirection === "left")
            valid = false;
        return valid
    }

    iterate(direction){
        if(this.isTargetHit(this.path[0], this.target)){
            this.target.plotTarget();
            this.growSnake();
            this.reduceInterval()
        }

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
            if(this.isValidDirectionChange(block.direction, this.direction))
            {
                block.direction = this.direction
            }
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
                        if(this.isValidDirectionChange(block.direction, pivot.direction))
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
        block.y = Math.abs((block.y-1 + 30)%30)
        return block;
    }

    moveDown(block){
        block.y = Math.abs((block.y+1)%30)
        return block;
    }

    moveLeft(block){
        block.x = Math.abs((block.x-1 + 30)%30)
        return block;
    }

    moveRight(block){
        block.x = Math.abs((block.x+1)%30)
        return block;
    }

    
}