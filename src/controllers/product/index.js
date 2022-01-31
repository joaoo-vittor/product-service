/* eslint-disable no-unused-vars */
import Product from '../../models/product';

class ProductController {
  read(req, res) {
    return res.status(200).json({ msg: 'Hello World!!' });
  }

  create(req, res) {
    const { userId } = req;

    console.log('user_id', req.userId);
    console.log('body', req.body);

    return res.status(200).json({ msg: 'Hello World!!' });
  }

  update(req, res) {
    return res.status(200).json({ msg: 'Hello World!!' });
  }

  delete(req, res) {
    return res.status(200).json({ msg: 'Hello World!!' });
  }
}

export default new ProductController();
