let Sell = require('../models').Sell;
let Client = require('../models').Client;
let Product = require('../models').Product;

module.exports = {
    create: (client, products,sellInfo) => {
        return new Promise ((resolve, reject) => {
            Client.findOne({ where: { id: client } }).then(client => {
                /* console.log(client); */
                Product.findAll({ where: { id: products } }).then(products => {
                    /* console.log(products); */
                    Sell.create(sellInfo).then(sell => {
                        sell.setClient(client).then(() => {
                            sell.setProductsSold(products).then(() => {
                                resolve(sell.get());
                            });
                        });
                    });
                });
            })
        });
    },
    read: (sellId = null) => {
        return new Promise ((resolve,reject) => {
            (sellId ?
                Sell.findOne({ 
                    include: [Client, { model: Product, as: "ProductsSold"} ],
                    where: { id: sellId } 
                }).then(sell => {
                    resolve(sell.get({plain:true}));
                })
             :
                Sell.findAll({ include: [Client, { model: Product, as: "ProductsSold" }]}).then(sells => {
                    resolve(sells.map( sell => {
                        return sell.toJSON();
                    }));
                }))
        });
    },
    update: (sell) => {
        if (!sell || !sell.id) return null;

        return Sell.update(sell, { where: { id: sell.id } });
    },
    delete: (sellId) => {
        if (!sellId) return null;

        return Sell.destroy({ where: { id: sellId } });
    }
}