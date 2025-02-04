export const Cart = {
    contenu: [],
    addToCart(product) {
        const existingProduct = this.contenu.find(item => item.product === product);
        if (existingProduct) {
            existingProduct.qty += 1;
        } else {
            this.contenu.push({ product: product, qty: 1 });
        }
        console.log(this.contenu);
    }
};



