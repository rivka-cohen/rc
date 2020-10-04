
enum shapeType{rectangle, ellipse}

export abstract class Shape {
  
    abstract draw(ctx:any)
    abstract toString()
    abstract bold()
    
}