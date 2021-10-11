// в этот файл импортируем
import {one, two} from './main'
// импортируем  и сразу переименовуеим
import {reName as name} from './main'
// импортируем абсолютно все и назовем все как data
import * as data from './main'
// импорт дефолтного экспорта
import sayBye from './main'
// для воспроизведения такого синтаксиса нам все еще нужен
// сборщик модулей
console.log(`${one} and ${two}`);

console.log(name);

console.log(data.one);
data.sayHi();

sayBye();