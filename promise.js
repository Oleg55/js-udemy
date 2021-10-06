// пример так называемого callBackHell
console.log('Запрос данных...');
setTimeout(() => {
    console.log('Подготовка данных...');

    const product = {
        name: 'TV',
        price: 2000
    };

    setTimeout(() => {
        product.status = 'order';
        console.log(product);
    }, 2000);
}, 2000);



// promise - поможет избавиться от callBackHell
// resolve - что-то выполнилось правильно (обещание)
// reject - обещание не выполнилось, что-то пошло не так
console.log('Запрос данных...');
const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = { // это мы типа получаем с сервера
            name: 'TV',
            price: 2000
        }; 
        
        resolve(product); // кладем в resolve для дальнейшей работы в блоке с then

    }, 2000);
});

// then - обрабатываем положительный результат
// req.then((product) => { // передаем ответ product в then для дальнейшей работы
//     setTimeout(() => {
//         product.status = 'order';
//         console.log(product);
//     }, 2000);
// });

// пример 2 с оборачиванием в промис ответа в then (then выше закомментировать) и цепочкой then
req.then((product) => { // передаем ответ product в then для дальнейшей работы
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.color = 'red';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => { // при срабатывании reject
    console.error('Произошла ошибка');
}).finally(() => { // всегда вконце
    console.log('Finally');
});


// Promise.all([]) служит для того что б быть уверенным что наши промисы ваполняться

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time)
    });
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All'); // все промисы выполнились
});

// Promise.race выполняется когда выаолнится первый

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('Race 1'); // все промисы выполнились
});