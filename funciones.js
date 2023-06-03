class ProductManager {

    constructor() {
        this.products = [];
    }

    getNextId = () => {
        const count = this.products.length;
        const nextId = (count > 0) ? this.events[count - 1].id + 1 : 1;
        return nextId;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const agregar = {
            id: this.getNextId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Error: todos los campos son obligatorios');
        } else {
            this.products.push(agregar);
        }
    }

    getProducts = () => { return this.products }

}

const producto = new ProductManager()
producto.addProduct('titulo', 'description: dsa', 'precio', 'thumbnail', 'code', 40)
console.log(producto.getProducts());

const producto2 = new ProductManager()
producto2.addProduct('titulo2', 'description: dsa', 'dsawe', 'thumbnail', 23, 20,)
console.log(producto2.getProducts());
