class ProductManager {
    constructor() {
        this.products = [];
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        const agregar = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock
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
producto.addProduct('titulo: asd', 'description: dsa', 'precio', 'thumbnail', 'code', 'asdsa')
// console.log(producto.title);
