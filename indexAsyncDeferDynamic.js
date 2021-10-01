const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    // ведут себя как async  -  никого не ждут
    // но можем добавть 1 строчку и скрипт будет вести себя как обычный скрипт на странице
    // и будет выполнять скрипты друг за другом
    // если script.async = false; убрать то порядок может быть нарушен
    script.async = false;
    // попадают на страницу только после этой команды
    document.body.append(script);
}
loadScript("indexAsyncDeferDynamicTest.js");
loadScript("indexAsyncDeferDynamicSome.js");

