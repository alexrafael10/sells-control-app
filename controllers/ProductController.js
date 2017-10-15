var Product = require('../models').Product;

module.exports = {
    create: (product) => {
        if (!product) return null;
        return Product.create(product);
    },
    read: (productId = null) => {
        return (productId ?
            Product.findOne({
                where: { id: productId }
            }) :
            Product.findAll());
    },
    update: (product) => {
        if (!product || !product.id) return null;

        return Product.update(product, { where: { id: product.id } });
    },
    delete: (productId) => {
        if (!productId) return null;

        return Product.destroy({ where: { id: productId } });
    }
}