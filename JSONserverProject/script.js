class MenuCard {
  constructor(src, alt, title, descr, price, parentSelector) {
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
    const element = document.createElement("div");
    element.classList.add("menu__item");
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

// отправляем данные на сервер
const btn = document.querySelector(".btn");

obj = {
  name: "Ella",
};

btn.onclick = async (e) => {
  const response = await postData(
    "http://localhost:3000/requests",
    JSON.stringify(obj)
  );
  console.log(response);
};

const postData = async (url, data) => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: data,
    });
    return await res.json();
  } catch (error) {
    console.log(error.data);
  }

  // .then(console.log("ok"))
  // .catch((err) => console.log(err));
};

// получаем данные с сервера
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", () => {
  getResource("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      console.log(img, altimg, title, descr, price, ".menu .container");
      new MenuCard(
        img,
        altimg,
        title,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
});

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status ${res.status}`);
  }

  return await res.json();
};
