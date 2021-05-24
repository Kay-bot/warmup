class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    toString() {
        return `[x=${this.x}, y=${this.y}, width=${this.width}, height=${this.height}]`
    }
}

const square = new Rectangle(2, 2, 4, 3)
console.log(square.toString())