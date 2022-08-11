import products from '../models/productModel.js';

export const getProducts = async (req, res) => {
  const { productIds } = req.query;
  try {
    const productsDetails = await products.find({ _id: productIds });
    res.json(productsDetails);
  } catch (error) {
    console.log('something went wrong', error);
    return res.status(500).send('Internal server error');
  }
};

export const createProduct = (req, res) => {
  try {
    let product = new products(req.body);
    product.save((err, data) => {
      if (err) {
        console.log(err);
        return res
          .status(400)
          .json({ message: 'Data is not inserted properly' });
      } else {
        return res.status(201).json(data);
      }
    });
  } catch (error) {
    console.log('something went wrong', error);
    return res.status(500).send('Internal server error');
  }
};
