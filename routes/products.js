const ProductController = require('../controllers').ProductController;

let express = require('express');
let router = express.Router();

// read all
router.get('/', function (req, res, next) {
    ProductController.read().then((products) => {
        res.send(products);
    })
});

//read one
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    ProductController.read(id).then((product) => {
        res.send(product);
    })
});

//create 
router.post('/create', function (req, res, next) {
    let product = req.body;

    ProductController.create(product).then((product) => {
        res.redirect("/products");
    })
});

module.exports = router;
