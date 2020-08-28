const Product = require('../../model/product');
// id: {
//     type: Number,
//     unique: true,
// },
// name: {
//     type: String,
// },
// roomType: {
//     type: String,
// },
// dealType: {
//     type: String,
// },
// price: {
//     type: Number,
// },
// address: {
//     type: String,
// },
// registDealer: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Dealer',
// }

const createProduct = async () => {
    try{
        const one = new Post({
            name: 'one', roomType: 'cash', dealType: '??', price: 10000, address: '청계산',
        });
        const two = new Post({
            name: 'two', roomType: 'cash', dealType: '??', price: 200, address: '정원',
        });
        const three = new Post({
            name: 'three', roomType: 'card', dealType: '??', price: 10000, address: '집앞'
        });
        await one.save();
        await two.save();
        await three.save();
        return true
    } catch (e) {
        console.log(e);
    }
}

const readProduct = async (req, res) => {
    try {
        const firstId = await Product.findByProductId(0);
        if (firstId == undefined) {
            await createProduct();
        }
        const product = await Product.findByProductId(req.params.id);
        console.log(product);
        return product;
    } catch (e) {
        console.log(e);
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({...req.body});
        return newProduct.save();
    } catch (e) {
        console.log(e);
    }
}

const deleteProduct = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

const updateProduct = async (req, res) => {
    try {

    } catch (e) {
        
    }
}

module.exports = {readProduct, createProduct, deleteProduct, updateProduct};