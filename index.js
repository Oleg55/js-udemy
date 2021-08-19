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