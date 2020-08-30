const Product = require('../../model/product');

const perPage = 20;

const createProductList = async () => {
    try{
        const one = new Product({
            name: 'one', roomType: 'cash', saleType: '??', salePrice: 10000, address: '청계산',
        });
        const two = new Product({
            name: 'two', roomType: 'cash', saleType: '??', salePrice: 200, address: '정원',
        });
        const three = new Product({
            name: 'three', roomType: 'card', saleType: '??', salePrice: 10000, address: '집앞'
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
            await createProductList();
        }
        const product = await Product.findByProductId(req.params.id);
        console.log(product);
        return product;
    } catch (e) {
        console.log(e);
    }
}

const readProductList = async (req, res) => {
    try {
        const firstId = await Product.findByProductId(0);
        if (firstId == undefined) {
            await createProductList();
        }
        let list = await Product.getProductList();
        console.log(list);
        return list;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const createProduct = async (req, res) => {
    try {
        const newProduct = new Product({...req.body});
        return await newProduct.save();
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

module.exports = {
    readProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    readProductList,
};