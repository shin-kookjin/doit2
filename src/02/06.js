// 기존 클래스

function Shape(x, y) {
  this.name = 'Shape';
  this.move(x, y);
}

// Shape.create = function (x, y) {
//   return new Shape(x, y);
// };
/* Shape.prototype.move = function (x, y) {
  this.x = x;
  this.y = y;
};
Shape.prototype.area = function () {
  return 0;
}; */
Shape.prototype = {
  move: function (x, y) {
    this.x = x;
    this.y = y;
  },
  area: function () {
    return 0;
  },
};
var s = new Shape(0, 0);
s.area();
console.log(s);
console.log(s.area());
console.log(s.name);

console.log('---------');

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.name = 'Circle';
  this.radius = radius;
}
Object.assign(Circle.prototype, Shape.prototype, {
  area: function () {
    return this.radius * this.radius;
  },
});
var c = new Circle(0, 0, 10);
console.log(c);
console.log(c.area());
console.log(c.name);
