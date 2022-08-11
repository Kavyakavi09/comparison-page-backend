import express from 'express';
import { getProducts, createProduct } from '../controller/product.js';

const router = express.Router();

router.get('/productsByIds', getProducts);
router.post('/create', createProduct);

export default router;
