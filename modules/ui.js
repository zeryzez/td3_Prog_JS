function displayProduct(product){
    return `
    <div class="product">
        <div class ="photo"> 
            picto  
            <a class="product-add2cart">
                <span class="mdi mdi-cart"></span>
            </a>
        </div>
        <div class="details">
            <div class ="details-top">
                <strong class="bigger"> ${product.ref} </strong>
                <strong class="bigger"> ${product.price} </strong>
            </div>
            <div class="details-description">
                <p> ${product.description} </p>
            </div>
        </div>
    </div> 
    `;
}

export function buildProductsList(products){
    let html = '';
    for(let product of products){
        html += displayProduct(product);
    }
    return html;
}
