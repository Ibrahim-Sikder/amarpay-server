import { Router } from 'express';
import { productsController } from './product.controller';

const router = Router();

router.post('/', productsController.addProductsHandler);
router.get('/', productsController.getAllProductsHandler);
router.get('/:id', productsController.getProductByIdHandler);

export const productRoutes = router;
