const express = require('express');
const bodyparse = require ('body-parser');
const router = express.Router();
const atletasController = require('../controllers/atletasController');

router.use(express.urlencoded({ extended: true}));
router.use(express.json());

router.post('/src/routes/cadastrarRoutes', atletasController.cadastrar);

module.exports = router;