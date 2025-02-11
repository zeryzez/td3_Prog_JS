import { productsFiltered } from "./products.js";
import { buildProductsList } from "./ui.js";


export function init(){
    buildProductsList(productsFiltered);
}