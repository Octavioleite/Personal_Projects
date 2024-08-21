const Product = require('../model/product');

function casdra_prodView(req, res) {
    res.render('casdra_prod.html');
}

function casdra_Product(req, res) {
    let product = {
        nomeProduct: req.body.productName,
        precoProduct: req.body.productPrice,
        quantidadeProduct: req.body.productQuantity,
        dateProduct: req.body.acquisitionDate,
        codigoProduto: req.body.productCode // Código do produto enviado pelo usuário
    };

    Product.create(product)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
            res.redirect('/?erro=true');  // Redireciona para a página principal com um parâmetro de erro
        });
}

module.exports = {
    casdra_prodView,
    casdra_Product
};
