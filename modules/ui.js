import { Cart } from './cart.js';

const productsList = document.getElementById('product-list');
const cartContainer = document.getElementById('cart-wrapper');
const cartHeader = document.getElementById('cart-header');
const cartContent = document.getElementById('cart-content');
const cartFooter = document.getElementById('cart-footer');
const totalProduct = document.getElementById('total-products');

function displayProduct(product){
    const container = document.createElement('div');
    container.classList.add('product');
    container.innerHTML = `
        <div class="photo"> 
            picto  
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class="details-top">
                <strong class="bigger"> ${product.ref} </strong>
                <strong class="bigger"> ${product.price} </strong>
            </div>
            <div class="details-description">
                <p> ${product.description} </p>
            </div>
        </div>
    `;

    const addToCartBtn = container.querySelector('.product-add2cart');
    addToCartBtn.addEventListener('click', () => {
        Cart.addToCart(product);
        displayCart();
    });
    return container;
}

export function buildProductsList(products){
    for(let product of products){
        productsList.appendChild(displayProduct(product));
    }
}

function displayCart(){
    const cartItems = Cart.contenu;
    totalProduct.innerHTML = cartItems.map(item => item.qty).reduce((acc, curr) => acc + curr, 0);
    
    cartContent.innerHTML = cartItems.map(item => `
        <tr class="cart-item">
            <td>${item.product.ref}</td>
            <td>${item.qty}</td>
            <td>${item.product.price * item.qty} €</td>
        </tr>
    `).reduce((acc, curr) => acc + curr, '');

    const total = Cart.genericCalc((acc, item) => acc + item.product.price*item.qty, 0);
    cartFooter.innerHTML = `
        <strong class="bigger">Total :&nbsp;</strong>
        <span class="bigger" id="cart-total">${total.toFixed(2)} €</span>
    `;

}