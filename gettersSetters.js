// свойства у обьекта делятся на 2 типа
// свойства - данные
// свойства - акцессоры
// свойства - акцессоры, делятся еще на две группы
// это геттеры и сеттеры
// геттеры - позволяют нам получать какоето значение свойсва
// сеттеры - устанавливать


// пример

const persone = {
    name: "Alex",
    age: 25,

    // получаем значение
    get userAge() {
        return this.age
    },

    // в пару к геттеру мы можем установить сетер
    // устанавливаем значение
    set userAge(num) {
        this.age = num;
    }
};
// когда используем геттер круглые скобки ставить не нужно
console.log(persone.userAge);
// устанавливаем значение
console.log(persone.userAge = 30);