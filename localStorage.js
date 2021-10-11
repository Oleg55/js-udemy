// localStorage это обьект который встроен в браузер
// может хранить различные данные
// localStorage существует только внутри одного домена
// помещается около 5мб

// устанавливаем ключ значение в localStorage
localStorage.setItem('number', 5);

// получаем данные с localStorage (по ключу)
console.log(localStorage.getItem('number'));

// удаляем элемент из localStorage
localStorage.setItem('number2', 15);
console.log(localStorage.removeItem('number2'));


// полностью очистить localStorage
// localStorage.clear();

// пример использования

const checkbox = document.querySelector('.checkbox'),
      form = document.querySelector('.form'),
      change = document.querySelector('.color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'red';
}
change.addEventListener('click', () => {
    if(localStorage.getItem('bg')) {
        localStorage.removeItem('bg');
        form.style.backgroundColor = '#fff';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'red';
    }
});

// запись обькта в localStorage
const persone = {
    name: 'Alex',
    age: 25
};
// переводим в JSON
const serializePersone = JSON.stringify(persone);
localStorage.setItem('alex', serializePersone);

// переводим в JS
console.log(JSON.parse(localStorage.getItem('alex')));