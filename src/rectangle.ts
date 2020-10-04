import { Point } from "./point";
import { Shape } from "./shape";



export class Rectangle extends Shape{

    private stroke=2
    constructor(public center:Point, public radius:Point){
        super();
    }

    draw(ctx: any) {
        ctx.lineWidth=this.stroke
        ctx.beginPath()
        ctx.rect()
        ctx.stroke();

    }

    toString() {
       return "Rectangle"
    }
    bold() {
        this.stroke=12
    }
    
    
  }