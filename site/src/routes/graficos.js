var express = require("express");
var router = express.Router();

var graficosController = require("../controllers/graficosController");

router.get("/dados", function (req, res) {
    graficosController.dados(req, res);
});

router.get("/dados2", function (req, res) {
    graficosController.dados2(req, res);
});

router.get("/dados3", function (req, res) {
    graficosController.dados3(req, res);
});

router.get("/dados4", function (req, res) {
    graficosController.dados4(req, res);
});

router.get("/dados5", function (req, res) {
    graficosController.dados5(req, res);
});

router.get("/dados6", function (req, res) {
    graficosController.dados6(req, res);
});

router.get("/dados7", function (req, res) {
    graficosController.dados7(req, res);
});

module.exports = router;