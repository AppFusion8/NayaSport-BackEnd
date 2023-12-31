const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/', productosController.getAllProductos);
router.get('/:id', productosController.getProductoById);
router.post('/', upload.single("imagen"), productosController.createProducto);
router.put('/:id',upload.single("imagen"), productosController.updateProducto);
router.delete('/:id', productosController.deleteProducto);

module.exports = router;
