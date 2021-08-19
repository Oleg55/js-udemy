// callback func - функция которая должна быть выполнена после того как другая 
// функция завершила свое выполнение 

function lernJS(lang, callback) {
   console.log(`I lern: ${lang}`);
   callback(); 
}

function done() {
    console.log('I finish this lesson!');
}

lernJS('JavaScript', done); // передаем без груглых скобок

//objects and destruct

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
}

console.log(options.name);

// удаление елемента из обьекта по ключу
delete options.name; 
console.log(options);

// перебор обьекта
for (let key in options) {
    console.log(`Свойство(key) ${key} значение(options[key]) ${options[key]}`);
}