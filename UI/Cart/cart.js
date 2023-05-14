import { person } from '../JS/class.js'
var item = document.getElementsByClassName('form-control');
var output = document.getElementsByClassName('product-line-price');

function removeElem(delElem, attribute, attributeName) {
    if (!(delElem && attribute && attributeName)) return;
    return function(e) {
        let target = e.target;
        if (!(target.hasAttribute(attribute) ?
                (target.getAttribute(attribute) === attributeName ? true : false) : false)) return;
        let elem = target;
        while (target != this) {
            if (target.classList.contains(delElem)) {
                let x = person.cart.list.find(el => el.id === target.id);
                person.cart.list.splice(person.cart.list.indexOf(x), 1);
                document.getElementById('cart-subtotal').textContent = person.Total();
                target.remove();
                return;
            }
            target = target.parentNode;
        }
        return;
    };
}

function getCategory(event) {
    let target = event.target;
    for (let i = 0; i < item.length; i++) {
        if (target == item[i]) {
            person.cart.list[item.length - (i + 1)].count = Number(target.value);
            output[i + 1].textContent = person.cart.list[item.length - (i + 1)].count * person.cart.list[item.length - (i + 1)].price;
            document.getElementById('cart-subtotal').textContent = person.Total();
        }
    }
}


person.view_cart();

for (let i = 0; i < item.length; i++) {
    item[i].addEventListener("change", getCategory);
}

document.addEventListener("click", removeElem("product", "data-del", "delete"));

document.querySelector('button.checkout').onclick = function() {
    if (person.cart.list.length != 0)
        window.location.href = "../OrderForm/orderForm.html";
    else
        window.location.href = "../Error/error.html";
}