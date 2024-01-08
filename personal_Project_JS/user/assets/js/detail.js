import products from "./products.js";
import cart from "./cart.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('home.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    })
};
loadTemplate(); 
const initApp = () => {
    let idProduct = new URLSearchParams(window.location.search).get('id');
    let info = products.filter((value) => value.id == idProduct)[0];
    console.log(info);
    if (!info){
        window.location.href = 'index.html';
    }
    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = info.image;
    detail.querySelector('.name').innerText = info.name;
    detail.querySelector('.price').innerText = '$' + info.price;
    detail.querySelector('.description').innerText = info.description;
    detail.querySelector('.addCart').dataset.id = idProduct;

    // simlilar Products

    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.filter((value) => value.id != idProduct).forEach(products =>{
        let newProduct = document.createElement('div');
    newProduct.classList.add('item');
    newProduct.innerHTML = 
    `
    <a href = "detail.html?id=${products.id}">
        <img src="${products.image}"/>
    </a>
        <h2>${products.name}</h2>
        <div class="price">$${products.price}</div>
        <button class = "addCart" data-id="${products.id}">
            Add to cart
        </button>
    `;
    listProduct.appendChild(newProduct);
    })

};

