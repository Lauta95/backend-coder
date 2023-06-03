class ProductManager {

    constructor() {
        this.products = [];
        this.id = 1;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const agregar = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Error: todos los campos son obligatorios');
        } else {
            console.log('OK');
            this.products.push(agregar);
        }
    }

    getProducts() { return this.products }

    getProductById() {

    }
}

const producto = new ProductManager()
producto.addProduct('titulo', 'description: dsa', 'precio', 'thumbnail', 'code', 'numeroDeStock')
console.log(producto.id);
getProducts();