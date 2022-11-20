var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.post("/quizCadastrar", function (req, res) {
    quizController.quiz(req, res);
})

router.post("/verify", function (req, res) {
    quizController.verify(req, res);
})

module.exports = router;

