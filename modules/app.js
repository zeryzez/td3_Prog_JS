import { productsFiltered } from "./products.js";
import { buildProductsList } from "./ui.js";


export function init(){
    const productsList = document.getElementById('product-list');
    productsList.innerHTML = buildProductsList(productsFiltered);
}