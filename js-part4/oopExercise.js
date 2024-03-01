class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        throw new Error("Method not implemented.");
    }
}

class Rectangle extends Shape {
    displayFormula() {
        console.log("multiply width times height");
    }

    calculateArea() {
        let area = this.width * this.height;
        console.log("Area is: ", area)
    }
}

const shape1 = new Rectangle(1,2);
shape1.displayFormula();
shape1.calculateArea();