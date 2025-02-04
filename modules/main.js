import {init} from './app.js';
import {search} from './products.js';

const productList = document.getElementById('product-list');
const research = document.getElementById('product-search');

window.addEventListener('load', init);

research.addEventListener('keyup', function(e){
    const keyword = e.target.value;
    search(keyword);
    productList.innerHTML = '';
    init();
});

