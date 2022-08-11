import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: String,
  price: String,
  image: String,
  ratings: String,
});

var products = mongoose.model('Products', productSchema);

export default products;
