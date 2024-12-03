const { Router } = require('express');
const router = Router()

const ProductService = require('./service');
const instance = new ProductService();

router.get('/', async (req, res, next) => {
  try {
    const products = await instance.getAll();

    res.status(200).json({
      products: products
    });
  } catch (error) {
    next(error);
  }
})
router.get('/:id');
router.post('/create');
router.post('/erase');

module.exports = router;