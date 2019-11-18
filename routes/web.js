var express = require('express');
var router = express.Router();

const matrixController = require ('../controllers/matrixController')
/* GET home page. */
router.get('/', matrixController.index);
router.get('/calculation', matrixController.calculation)

module.exports = router;
