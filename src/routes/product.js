import { Router } from 'express';
import productController from '../controllers/product';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, productController.read);
router.post('/create', loginRequired, productController.create);
router.put('/update', loginRequired, productController.update);
router.delete('/delete', loginRequired, productController.delete);

export default router;
