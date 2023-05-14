class Person {
    constructor() {
        this.cart = new Cart();
    }
    getCategory(event) {
        var output = document.getElementsByClassName('product-line-price');
        let target = event.target;
        for (let i = 0; i < item.length; i++) {
            if (target == item[i]) {
                this.cart.list[item.length - (i + 1)].count = Number(target.value);
                output[i + 1].textContent = this.cart.list[item.length - (i + 1)].count * this.cart.list[item.length - (i + 1)].price;
                document.getElementById('cart-subtotal').textContent = this.Total();
            }
        }
    }
    Total() {
        let total_sum = 0;
        this.cart.list.forEach(el => {
            total_sum += (el.price * el.count);
        });
        return total_sum;
    };
    view_cart() {
        this.cart.list.forEach(el => {
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
        document.getElementById('cart-subtotal').innerHTML = this.Total();
    }


    removeElem(delElem, attribute, attributeName) {
        //проверка на наличие всех аргументов.
        if (!(delElem && attribute && attributeName)) return;
        //возвращаем функцию, которая будет иметь доступ к аргументам, и при этом будет в себе хранить объект события.
        return function(e) {
            //Узнаем на каком элементе был произведен клик.
            let target = e.target;
            //Делаем проверку на наличие атрибута "data-del", и проверяем на наличие параметра "delete".
            if (!(target.hasAttribute(attribute) ?
                    (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
            let elem = target;
            //После мы производим поиск элемента, который нужно удалить. Поиск идет снизу вверх. За счет того, что кнопки находяться внутри "card", то мы точно удалить нужный нам "card"(сорри за тавтологию).
            while (target != this) {
                if (target.classList.contains(delElem)) {
                    let x = this.cart.list.find(el => el.id === target.id);
                    this.cart.list.splice(list.indexOf(x), 1);
                    document.getElementById('cart-subtotal').textContent = this.Total();
                    target.remove();
                    return;
                }
                target = target.parentNode;
            }
            return;
        };
    }
}
class Cart {
    constructor() {
        this.list = new Array();
        this.list.push({
            id: '1',
            code: '1',
            img: 'https://drive.google.com/uc?export=view&id=1jlhCt6WhCjylTOyfvth1libAgaZ1pljp',
            title: 'HUAWEI MateBook D 16',
            description: 'Ноутбук',
            price: 2700,
            count: 2
        })
        this.list.push({
            id: '2',
            code: '1',
            img: 'https://drive.google.com/uc?export=view&id=1W8-i0PHD4KI-gwrRtzUzIrsuuay43INr',
            title: 'Jet Wizard 5i10400FD16HD1SD24X165L2W5',
            description: 'Игровой системный блок',
            price: 2000,
            count: 1
        })
    };
    add_el(value) {
        let code_v = 1;
        let id_v = 1;
        if (this.list.length != 0)
            id_v = this.list.length + 1;
        let index = this.list.indexOf(el => el.title === value.title);
        if (index != -1) {
            this.list[index].count += 1;
            return;
        }
        if (value.title == 'Ремонт компьютера' || value.title == "Установка ПО" || value.title == "Продажа компьютера")
            code_v = 2;
        this.list.push({
            id: id_v,
            code: code_v,
            img: value.img,
            title: value.title,
            description: value.description,
            price: value.price,
            count: 1
        });
    }
}
export let person = new Person();