const persone = {
    name: 'Alex',
    tel: '+343553424'
};

//JSON.stringify - обьект в формат JSON
// теперь мы можем отправить на сервер
console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+343553424"}

//JSON.parse - JSON в обьект
// теперь мы можем работать как с обьектом
console.log(JSON.parse(JSON.stringify(persone))); // { name: 'Alex', tel: '+343553424' }

// Глубокая капия обьекта

const persone2 = {
    name: 'Alex',
    tel: '+343553424',

    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone2));
clone.parents.mom = 'Vika';
console.log(clone);
console.log(persone2);