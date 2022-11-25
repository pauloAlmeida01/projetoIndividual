var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/quizCadastrar", function (req, res) {
    quizController.quiz(req, res);
})

router.post("/verify", function (req, res) {
    quizController.verify(req, res);
})

router.get("/dados", function (req, res) {
    quizController.dados(req, res);
})

module.exports = router;

