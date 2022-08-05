// ES6 클래스
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = 'Shape';
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
    // return this.x * this.y;
  }
  area() {
    return 0;
  }
}
Shape.create();
console.log(Shape.create());
var s = new Shape(1, 2);
console.log(s);
console.log(s.area());
console.log();
s.move(3, 4);

// class Circle extends Shape {
//   constructor(x, y, radius) {
//     super(x, y);
//     this.radius = radius;
//   }
//   area() {
//     if (this.radius === 0) return super.area();
//     return this.radius * this.radius;
//   }
// }
// var c = new Circle(1, 2, 10);
// console.log(c.area());

// console.log(s.move());
