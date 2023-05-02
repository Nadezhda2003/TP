function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var list = [
    {
        id: '1',
        code: 'Продукт 2022',
        img: 'https://drive.google.com/uc?export=view&id=1jlhCt6WhCjylTOyfvth1libAgaZ1pljp',
        title: 'HUAWEI MateBook D 16',
        description: 'Ноутбук',
        price: '2 700 Br',
        reviews: '84 отзыва',
        size:'x="-5" y="0" width="210px"',
        stars: '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>'
    },
    {
        id: '2',
        code: 'Продукт 5485',
        img: 'https://drive.google.com/uc?export=view&id=1W8-i0PHD4KI-gwrRtzUzIrsuuay43INr',
        title: 'Jet Wizard 5i10400FD16HD1SD24X165L2W5',
        description: 'Игровой системный блок',
        price: '2 000 Br',
        reviews: '25 отзывов',
        size: 'x="45" y="20" height="150px"',
        stars:'<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i>'
    }
];

list.forEach(el => {
    document.querySelector(".search-bar").insertAdjacentHTML('afterend', `<div class="product"><div class="title">${el.title}</div>
    <div class="text"><div class="code">${el.code}</div>
    <div class="description">${el.description}</div>
    <div class="reviews">${el.stars}<span class="star-reviews">${el.reviews}</span></div>
    <div class="price">${el.price}</div>
    <div class="shop-actions">
                    <button><img src="https://drive.google.com/uc?export=view&id=1DgFl2Eo72KXTkWjB6-rwnfVcpQUm2Ost" class="cart" alt="cart"/> Добавить в корзину</button>
                </div>
            </div>
            <div class="preview">
                <svg class="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <circle class="circle" cx="100" cy="100" r="100" />
                    <image class="image"
                        xlink:href=${el.img}
                        ${el.size} />
                </svg>
            </div>
    </div > `);
});
