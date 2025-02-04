function Product(ref,price,desc){
    this.ref = ref;
    this.price = price;
    this.description = desc;
}

let p1 = new Product('ref1', 100, 'desc1');
let p2 = new Product('ref2', 200, 'desc2');
let p3 = new Product('ref3', 300, 'desc3');

export const products = [p1, p2, p3];

export function search(keyword){
    return products.filter(p => p.description.includes(keyword) || p.ref.includes(keyword));
}