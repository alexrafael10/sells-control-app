var Client = require('../models').Client;
var Sell = require('../models').Sell;

module.exports = {
    create: (client) => {
        if (!client) return null;
        return Client.create(client);
    },
    read: (clientId = null) => {
        return new Promise((resolve, reject) => {
            (clientId ?
                Client.findOne({
                    include: [{ model: Sell, as: "Sells" }],
                    where: { id: clientId }
                }).then(client => {
                    resolve(client.get({ plain: true }));
                })
                :
                Client.findAll({ include: [{ model: Sell, as: "Sells" }] }).then(clients => {
                    resolve(clients.map(client => {
                        return client.toJSON();
                    }));
                }))
        });

       /* return (clientId ? 
        Client.findOne ({
            where: {id: clientId}
        }) :
        Client.findAll()); */
    },
    update: (client) => {
        if (!client || !client.id) return null;        
    
        return Client.update(client, {where: {id: client.id}});
    },
    delete: (clientId) => {
        if (!clientId) return null;
        
        return Client.destroy({ where: {id: clientId} });
    },
    getSells: (clientId) => {
        return Sell.findAll();
    }
}