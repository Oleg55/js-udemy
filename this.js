// 1) обычная функция: this = window, но если стоит use strict this = undefined
function showThis() {
    console.log(this); // будет ссылаться на глобальный обьект window
}
showThis();

function showThis2(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return  a + b; // благодаря замыканию функция находит a и b выше
    }
    console.log(sum());
}
showThis2(4, 5);

// 2) Контекст у методов обьекта будет сам обьект

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

// 3) this в конструкторах и классах это новый экземпляр обьекта (ivan = new User('Ivan', 28))

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;

    this.hello = function () {
        console.log(`Hello ${this.name}`);
    }
}

const ivan = new User('Ivan', 28);

// 4 Ручная привязка this:  call, apply, bind

function sayName(surname) {
    console.log(this)
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};
// разница в синтаксее передачи аргументов
sayName.call(user, 'Smith'); // привязываем контекст
sayName.apply(user, ['Smith']); // привязываем контекст

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(33));

// пример на практике
const btn = document.querySelector('button');
// в таком случае контекст вызова будет сам элемент на который мы кликнули
btn.addEventListener('click', function() {
    console.log(this);
    this.style.backgroundColor = 'red';
});

// можно через event
btn.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'green';
});

// у стрелочной функуции нет своего контекста вызова, она всегда будет брать у своего родителя

    const obj2 = {
        num: 5,
        sayNumber: function() {
            const say = () => {
                console.log(this); // this будет ссылаться на сам обьект
            };
            say();
        }
    };

    obj2.sayNumber();
    //
    const obj3 = {
        num: 5,
        sayNumber: function() {
            const say = () => {
                console.log(this.num); // this будет ссылаться на сам обьект
            };
            say();
        }
    };

    obj3.sayNumber();

    // короткий вариант стрелочной функции (напоминание)
    const double2 = a => a * 2;
    console.log(double2(4));
