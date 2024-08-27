const Product = require('../models/products');

exports.getProducts = async function(req, res, next) {
    let results = await Product.find();
    res.json(results);
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: 'User not found' });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.searchProductByName = async (req, res) => {
    try {
        const searchQuery = req.params.name || '';
        const products = await Product.find({
            name: { $regex: searchQuery, $options: 'i' } 
        });

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


exports.postProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        availability: req.body.availability
    });

    try {
        const newProduct = await product.save();
        res.json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.updateProductById = async function(req, res) {
    try {
        const productId = req.params.id;
        const updateData = req.body;

        const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });

        if (!product) {
            return res.status(404).json({ status: "error", message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated", product });
    } catch (err) {
        res.status(500).json({ status: "error", error: err });
    }
};

exports.deleteProducts = async (req, res) => {
    try {
        const result = await Product.findByIdAndDelete(req.params.id);
        if (!result) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.indexFunction = function(req, res, next) {
    res.send('respond with a resource');
};

exports.findProductsHigherThanPrice = async (req, res) => {
    try {
        const minPrice = parseFloat(req.params.price);

        if (isNaN(minPrice)) {
            return res.status(400).json({ message: 'Invalid price parameter' });
        }

        const products = await Product.find({ price: { $gt: minPrice } });

        if (products.length === 0) {
            return res.status(404).json({ message: 'No products found' });
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getProductByAvailability = async function (req , res , next) {
    let result = await Product.find( { availability : req.params.availability });
    res.json(result);
};

