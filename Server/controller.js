const axios = require("axios");

module.exports = {
  //Read - Get
  getInventory: (req, res) => {
    const dbInstance = req.app.get("db");
    dbInstance.get_inventory()
      .then(products => {
        res.send(products);
      })
      .catch(err => res.status(404).send({errorMessage:"Oops"}));
  },

 //Create - Post
  newProduct: (req, res) => {
    const dbInstance = req.app.get("db");
    const { name, price, image } = req.body;
    dbInstance.create_product([name, price, image])
    //dbInstance.create_product({name:req.body.name,price:req.body.price,image:req.body.image})
      .then((product) => {
        res.status(200).send(product);
      })
      .catch(err => res.status(404).send(err));
  },

  //Delete
  deleteProduct: (req, res) => {
    const dbInstance = req.app.get("db");
     dbInstance.delete_product(req.params.id)
        .then(response => {
         res.status(200).send(response);
         })
  },

  //Update - Put
  editProduct: (req, res) => {
    const dbInstance = req.app.get("db");;
    console.log(req.params.id);
    dbInstance
      .edit_product({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        image: req.body.image
      })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => res.status(404).send(err));
  }
};
