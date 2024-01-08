import cart from "./cart.js";
import products from "./products.js";
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
    // load list products
    let listProduct = document.querySelector('.listProduct');
    listProduct.innerHTML = null;
    products.forEach(products =>{
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
}
