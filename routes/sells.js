const SellController = require('../controllers').SellController;

let express = require('express');
let router = express.Router();

// read all
router.get('/', function (req, res, next) {
    SellController.read().then((sells) => {
        res.send(sells);
    })
});

//read one
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    SellController.read(id).then((sell) => {
        res.send(sell);
    })
});

//create 
router.post('/create', function (req, res, next) {
    let sellData = JSON.parse(req.body.sellData),
        clientId = req.body.clientId,
        productsId = JSON.parse(req.body.productsId);
        console.log(productsId);
    SellController.create(clientId, productsId, sellData).then((sell) => {
        res.redirect("/sells");
    })
});

module.exports = router;
