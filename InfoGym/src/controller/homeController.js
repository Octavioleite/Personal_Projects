//const Usuario = require('../model/usuario');
function homeView(req, res) {
    res.render("home.html");
}


module.exports = {
    homeView
};