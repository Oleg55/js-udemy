// классы это красивая обертка функций конструкторов
// всегда начинается с большой буквы
// 
class Rectangle {
    constructor(heigh, width) {
        this.heigh = heigh;
        this.width = width;
    } // ; не ставим

    // методы
    calcArea() {
        return this.heigh * this.width;
    } // ; не ставим
}

// наследуем от class Rectangle
class ColoredRectangleWithText extends Rectangle {
    constructor(heigh, width, text, bgColor) {
        // super должна быть на 1 месте в конструкторе
        // super(); // вызывем эти this.heigh = heigh; this.width = width; строки у родителя в нашем новом классе (все)
        super(heigh, width); // можем указать сваойства которые нам нужны
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello', 'red')

div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10,10);
const long = new Rectangle(20,100);
console.log(square.calcArea());
console.log(long.calcArea());
