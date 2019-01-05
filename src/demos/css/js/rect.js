//构造对象方块
function Rect(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
}

//画方块的方法
Rect.prototype.draw = function(context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.rect(this.x, this.y, this.w, this.h);
    context.fill();
    context.stroke();
    context.strokeStyle="#fe862f";
}

export default Rect;