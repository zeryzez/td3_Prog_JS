import { Cart } from './cart.js';

const productsList = document.getElementById('product-list');

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
        console.log(`Produit ajouté au panier: ${product.ref}`);
    });
    return container;
}

export function buildProductsList(products){
    for(let product of products){
        productsList.appendChild(displayProduct(product));
    }
}


