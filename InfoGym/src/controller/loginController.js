//const Usuario = require('../model/usuario');
function loginView(req, res) {
    res.render("login.html");
}


module.exports = {
    loginView
};