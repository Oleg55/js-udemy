// используем классы для карточек

class MenuCard {
    constructor (src, alt, title, descr, price, parentSelector){
        this.src = src;
        this.alt = alt;
        this.title = title;
        this.descr = descr; 
        this.price = price;
        this.parent = document.querySelector(parentSelector);
        this.tranfer = 27;
        this.changeToUAH();
    }

    changeToUAH() {
        this.price = this.price * this.tranfer;
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('menu__item')
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
    '.menu .container'
).render(); // обьект отработает и исчезнит

new MenuCard(
    "https://kak2c.ru/storage/app/uploads/public/60a/512/dda/60a512dda5b40440435388.jpg",
    "laptop",
    'Mеню "фитнес"',
    'MeHIO "OUTHEC" - это новый подход к пр это новый подход к пр это новый подход к пр',
    9,
    '.menu .container'
).render(); // обьект отработает и исчезнит