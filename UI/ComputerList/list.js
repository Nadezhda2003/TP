import { computers } from '../JS/list.js'
computers.view_list();
import { person } from "../JS/class.js";


let btns = document.querySelectorAll('.action');
btns.forEach((btn) => {
    btn.addEventListener('click', () => {
        let idex = btn.parentElement.parentElement.parentElement.id;
        person.cart.add_el(computers.list[idex - 1]);
    });
});