const express = require('express');
const router = express.Router();
const productController = require('../controllers/products');

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

router.post('/', productController.postProduct);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProducts);

router.get('/search/:name', productController.searchProductByName);

router.get('/price/:price', productController.findProductsHigherThanPrice);

router.get('/availablity/:availability', productController.getProductByAvailability);

module.exports = router;
