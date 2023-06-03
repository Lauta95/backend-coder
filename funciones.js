class ProductManager {

    constructor() {
        this.products = [];
    }

    getNextId = () => {
        const count = this.products.length;
        const nextId = (count > 0) ? this.products[count - 1].id + 1 : 1
        return nextId;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {

        const yaExisteCode = this.products.find((product) => product.code === code);
        if(yaExisteCode){
            console.log('ERROR: se repite el campo CODE');
            return;
        }

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

    getProductById = (id) => {
        const product = this.products.find((product) => product.id === id);
        if(product){
            console.log(`producto encontrado: ${JSON.stringify(product)}`);
        } else {
            console.log('no se encontró el producto con ese id');
        }
    }

}

const producto = new ProductManager();
producto.addProduct('titulo', 'description: dsa', 423, 'dsaf', 15, 40)
producto.addProduct('titulo2', 'description: otra', 200, 'thumbnail', 14, 20,)
console.log(producto.getProducts());
producto.getProductById(2);

