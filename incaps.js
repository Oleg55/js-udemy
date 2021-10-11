// Инкапсуляция - скрытие данных программы от внешнего вмешательства
// это означает, что обьект хранит свое состояние в приватоном порядке
// и только методы обьекта имеют доступ для его измениния
// но в JS можно лишь иметировать нечто подобное
 
// пример

// создаем конструктор без использования инкапсуляции
function User(name, age) {
    this.name = name;
    this.age = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.age);
// не защищенные данные можно изменить
ivan.age = 30;
ivan.name = 'Alex';

ivan.say();


// создаем конструктор с использованием инкапсуляции
function User2(name2, age2) {
    this.name2 = name2;
    let userAge = age2; // <--------------

    this.say2 = function() {
        console.log(`Имя пользователя: ${this.name2}, возраст ${userAge}`);
    }

    // создаем методы для работы с userAge снаружи для получения и изменения
    this.getAge = function () {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan2 = new User2('Ivan2', 24);
console.log(ivan2.name2);
console.log(ivan2.userAge); // undefined
ivan2.userAge = 32; // userAge не доступна ни для изменения ни для получения
ivan2.name2 = 'Alex2';
ivan2.say2();
// использование методов для изменения и получения userAge
console.log(ivan2.getAge());
console.log(ivan2.setAge(40));

console.log(ivan2.setAge(140)); // Недопустимое значение


ivan2.say2(); // Имя пользователя: Alex2, возраст 40

// инкапсуляция на примере классов

class User3 {
    constructor(name3, age3) {
        this.name3 = name3;
        // this.userAge3 = age3; // но теперь свойство публичное
        this._age = age3;
        // по договоренности что б свойство не меняли его нужно начинать с _ , это не синиаксис языка, а общее соглашение
        // тоесть this._age = age3
        // далее меняем userAge3 на _age
        // для управления этим свойством использую геттеры и сеттеры
    }

    // вариани без геттеров и сеттеров
    // say3() {
    //     console.log(`Имя пользователя: ${this.name3}, возраст ${this._age}`);
    // }

    // // создаем методы для работы с userAge снаружи для получения и изменения
    // getAge() {
    //     return this._age;
    // }

    // setAge(age) {
    //     if (typeof age === 'number' && age > 0 && age < 110) {
    //         this._age = age;
    //     } else {
    //         console.log('Недопустимое значение');
    //     }
    // }

    // и вариант как разрабатывают сейчас с геттерами и сеттерами

    say3() {
        console.log(`Имя пользователя: ${this.name3}, возраст ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение');
        }
    }
}

const ivan3 = new User3('Ivan3', 24);

console.log(ivan3.age); // используем геттер // 24
ivan3.age = 99; // используем сеттер

ivan3.say3(); // Имя пользователя: Ivan3, возраст 99