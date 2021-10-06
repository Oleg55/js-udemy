// VS code запускаяем с помощью Live Server !!!

const inputGrn = document.querySelector('#grn'),
      inputUsd = document.querySelector('#usd');

    // 1) XML http request
inputGrn.addEventListener('input', () => {
    const request = new XMLHttpRequest();
    // --->> request.open(method, url, async, login, password); // собироем настройки для запроса; 
    // method - get/post; url - путь к серверу; async - код работает асинхронно; 
    // login - логин; password - пароль;

    request.open('GET', 'AJAX/current.json');

    request.setRequestHeader('Content-type', 'application/json', 'charset=utf-8'); // устанавливаем заголовки
    request.send(); // отпрвляем

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputGrn.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    }); // отслеживает готовность нашего запроса в текущий момент следит за свойством readyState

    // status - код ошибки 404 и т.д.
    // statusText - текстовый код ошибок "OK, Not found, ..."
    // response - тот ответ который приходит с бека
    // readyState - текущее состояние нашего запроса https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
});