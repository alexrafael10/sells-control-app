const ClientController = require('../controllers').ClientController;

let express = require('express');
let router = express.Router();
// read all
router.get('/', function (req, res, next) {
    ClientController.read().then((clients) => {
        res.send(clients);
    })
});

//read one
router.get('/:id', function (req, res, next) {
    let id = req.params.id;
    ClientController.read(id).then((client) => {
        res.send(client);
    })
});

//create 
router.post('/create', function (req, res, next) {
    let client = req.body;

    ClientController.create(client).then((client) => {
        res.redirect("/clients");
    })
});

module.exports = router;
