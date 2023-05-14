import { person } from "../JS/class.js";


document.querySelector('#\\31').onclick = function() {
    let value = {
        img: 'https://drive.google.com/uc?export=view&id=113qt-DFqNQgO27dpp0q_U9Z0ZsH8Ont-',
        title: 'Ремонт компьютера',
        description: 'Цена назначается в офисе',
        price: 0,
        count: 1
    }
    person.cart.add_el(value);
}
document.querySelector('#\\32').onclick = function() {
    window.location.href = "../ComputerList/list.html";
}
document.querySelector('#\\33').onclick = function() {
    let value = {
        img: 'https://drive.google.com/uc?export=view&id=113qt-DFqNQgO27dpp0q_U9Z0ZsH8Ont-',
        title: 'Продажа компьютера',
        description: 'Цена назначается в офисе',
        price: 0,
        count: 1
    }
    person.cart.add_el(value);
}
document.querySelector('#\\34').onclick = function() {

    let value = {
        img: 'https://drive.google.com/uc?export=view&id=113qt-DFqNQgO27dpp0q_U9Z0ZsH8Ont-',
        title: 'Установка ПО',
        description: 'Цена назначается в офисе',
        price: 0,
        count: 1
    }
    person.cart.add_el(value);
}