import { Point } from "./point";
import { Shape } from "./shape";



export class Ellipse extends Shape{
    stroke: number;
 
    constructor(public center: Point, public radius:Point){
        super();
    }

    draw(ctx: any) {
        ctx.lineWith=2
        ctx.beginPath();
        ctx.ellipcse(this.center.X,this.center.Y,this.radius.Y,0,0,2*Math.PI)
        ctx.stroke();
    }
  

    toString(){
        return "Ellipse"
    }

    bold(){
        this.stroke=10;
    }
  
  }