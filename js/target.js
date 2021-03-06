import {Block} from './block.js';

export class Target extends Block {
    constructor(){
        super();
        this.plotTarget();
        this.type = "target";
    }

    plotTarget(snake){
        this.x = this.plotTargetCoordinate();
        this.y = this.plotTargetCoordinate()
    }

    plotTargetCoordinate(){
        return Math.floor(Math.random() * 30);
    }

    
}