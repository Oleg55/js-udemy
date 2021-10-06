// Rest - обьеденяет отдельные элементы в массив (остальное)

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage'); // basic rest [ 'operator', 'usage' ]

// параметры по умолчанию

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3) // 6

// пример Rest

class MenuCard {
    constructor (src, alt, title, descr, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr; 
        this.price = price;
        this.classes = classes; // < -------------------------- rest
        this.parent = document.querySelector(parentSelector);
        this.tranfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.tranfer;
    }

    render() {
        const element = document.createElement('div');
        console.log(this.classes.length );
        if(this.classes.length === 0) {
            this.element = 'menu__item';
            element.classList.add(this.element);
        } else {
            this.classes.forEach(className => element.classList.add(className)); // < -------------------------- rest
        }

        element.innerHTML = `
            <img class="menu__item-img" src=${this.src} alt=${this.alt}>
            <h3 class="menu_item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
                ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span>грн/день</div>
                </div>
            </div>
        `;
        this.parent.append(element);
    }
}

new MenuCard(
    "https://kak2c.ru/storage/app/uploads/public/60a/512/dda/60a512dda5b40440435388.jpg",
    "laptop",
    'Mеню "фитнес"',
    'MeHIO "OUTHEC" - это новый подход к пр это новый подход к пр это новый подход к пр',
    9,
    '.menu .container',
    'menu__item', // < -------------------------- rest
    'big' // < -------------------------- rest
).render(); // обьект отработает и исчезнит

new MenuCard(
    "https://kak2c.ru/storage/app/uploads/public/60a/512/dda/60a512dda5b40440435388.jpg",
    "laptop",
    'Mеню "фитнес"',
    'MeHIO "OUTHEC" - это новый подход к пр это новый подход к пр это новый подход к пр',
    9,
    '.menu .container',
    // < -------------------------- rest без классов
).render(); // обьект отработает и исчезнит
