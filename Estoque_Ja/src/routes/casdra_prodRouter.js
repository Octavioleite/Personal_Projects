const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const casdra_prodController = require('../controller/casdra_prodController');

const uploadDir = path.join(__dirname, '../uploads');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const productCode = req.body.productCode; // Captura o código do produto do corpo da solicitação
        const extension = path.extname(file.originalname);
        cb(null, `${productCode}${extension}`); // Usa o código do produto como nome do arquivo
    }
});

const upload = multer({ storage: storage });

router.get('/casdra_prod', casdra_prodController.casdra_prodView);
router.post('/casdra_prod', upload.single('productImage'), casdra_prodController.casdra_Product);

module.exports = router;
