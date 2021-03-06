import * as express from 'express';
import database from '../db';
import * as mongodb from 'mongodb';
let router = express.Router();

// GET products
router.get('/', (req, res) => {
  database.db.collection('products').find().toArray().then((products)=>{
    res.json(products);
  })
});

// Delete product
router.delete('/:id', (req, res) => {
  let productId = new mongodb.ObjectID(req.params['id']);
  database.db.collection('products').remove({_id:productId}).then(()=> {
    res.sendStatus(200);
  });

});

// Create/Update product
router.post('/', (req, res) => {
  let product = req.body;
  product._id = new mongodb.ObjectID(product._id); // convert _id to object
  database.db.collection('products').save(product).then((newProduct) => {
    res.json(newProduct);
  })
});

export default router;
