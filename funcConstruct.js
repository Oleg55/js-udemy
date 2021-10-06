// функция констоуктор 
// с ее помощью мы можем создавать новых пользователей
// предназначены для конструирования обьектов и создания множества копий
// не нужен return
// можем записать методы
// пример однотипного использования: товары в магазинах, пользователи, ролики на ютубе и т.д. слайдеры на сайте...

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}
// наследуем прототипно метод
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}

// создаем новых пользователей

const ivan = new User('Ivan', 28); // ivan будет обьектом со свойствами из function User
const alex = new User('Alex', 29)

console.log(ivan);
console.log(alex);

ivan.hello();
alex.hello();
ivan.exit();

// в синтаксисе ес6 для более удобного создания появились классы ! <---
