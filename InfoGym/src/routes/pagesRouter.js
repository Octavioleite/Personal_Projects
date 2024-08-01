const express = require('express');
const router = express.Router();
const pagesController = require('../controller/pagesController');

router.get('/faixaEtaria', pagesController.PagesView);
router.post('/faixaEtaria',pagesController.VerificarIdade);
module.exports = router;

