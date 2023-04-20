function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
var total_sum = 0;
var list = [
    {
        id: '1',
        code: '1',
        img: 'https://drive.google.com/uc?export=view&id=1jlhCt6WhCjylTOyfvth1libAgaZ1pljp',
        title: 'HUAWEI MateBook D 16',
        description: 'Ноутбук',
        price: 2700,
        count: 2
    },
    {
        id: '2',
        code: '1',
        img: new Image().src = 'https://drive.google.com/uc?export=view&id=1W8-i0PHD4KI-gwrRtzUzIrsuuay43INr',
        title: 'Jet Wizard 5i10400FD16HD1SD24X165L2W5',
        description: 'Игровой системный блок',
        price: 2000,
        count: 1
    }
];
list.forEach(el => {
    document.querySelector(".column-labels").insertAdjacentHTML('afterend', `<div id=${el.id} class="product">
        <div class="product-image"><img src=${el.img} alt='product'/></div>
        <div class="product-details"><div class="product-title">${el.title}</div>
            <p class="product-description">${el.description}</p></div>
        <div class="product-price">${el.price}</div>
        <div class="product-quantity">
                    <input type="number" class="form-control" id="${el.id}", value=${el.count} min="1">
                </div>
        <div class="product-removal"><button id=${el.id} class="remove-product" data-del="delete">Удалить</button></div>
        <div class="product-line-price" id=${el.id}>${el.count * el.price}</div>
        </div>`);
});
function Total(list) {
    total_sum = 0;
    list.forEach(el => {
        total_sum += (el.price * el.count);
    });
    return total_sum;
};
document.getElementById('cart-subtotal').innerHTML = Total(list);


//редактирование кол-ва
var item = document.getElementsByClassName('form-control');
var output = document.getElementsByClassName('product-line-price');
var goodsItem = document.getElementsByClassName('goods-item');
var categOutput = document.getElementById('categories');


for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("change", getCategory);
}

function getCategory(event) {
    let target = event.target;
    for (let i = 0; i < item.length; i++) {
        if (target == item[i]) {
            list[item.length-(i+1)].count = Number(target.value);
            output[i+1].textContent = list[item.length-(i+1)].count * list[item.length-(i+1)].price;
            document.getElementById('cart-subtotal').textContent = Total(list);
        }
    }
}

//удаление элемента из корзины

function removeElem(delElem, attribute, attributeName) {
    //проверка на наличие всех аргументов.
    if (!(delElem && attribute && attributeName)) return;
    //возвращаем функцию, которая будет иметь доступ к аргументам, и при этом будет в себе хранить объект события.
    return function (e) {
        //Узнаем на каком элементе был произведен клик.
        let target = e.target;
        //Делаем проверку на наличие атрибута "data-del", и проверяем на наличие параметра "delete".
        if (!(target.hasAttribute(attribute) ?
            (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
        let elem = target;
        //После мы производим поиск элемента, который нужно удалить. Поиск идет снизу вверх. За счет того, что кнопки находяться внутри "card", то мы точно удалить нужный нам "card"(сорри за тавтологию).
        while (target != this) {
            if (target.classList.contains(delElem)) {
                let x = list.find(el => el.id === target.id);
                list.splice(list.indexOf(x), 1);
                document.getElementById('cart-subtotal').textContent = Total(list);
                target.remove();
                return;
            }
            target = target.parentNode;
        }
        return;
    };
}
document.addEventListener("click", removeElem("product", "data-del", "delete"));