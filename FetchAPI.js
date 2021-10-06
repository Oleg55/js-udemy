// FetchAPI  - техногия позволяющая общаться с сервером
// построенная но промисах
// для примеров используем fake API https://jsonplaceholder.typicode.com/

// получаем данные
fetch('https://jsonplaceholder.typicode.com/todos/1') // обращаемся к серверу
  .then(response => response.json()) // потом получаем ответ в формате json. json() - превращает json в обычный обьект, 
  // после response.json() нам возваращается промис так как мы не знаем как быстро json превратиться в js обьект и мы его обрабатываем в следующем then
  // вместо .json() можно использовать .text()
  .then(json => console.log(json));


// отправляем данные
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
  .then(response => response.json())
  .then(json => console.log(json))