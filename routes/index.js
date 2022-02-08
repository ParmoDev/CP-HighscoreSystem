var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  fs.appendFileSync('./highscores.txt', req.body.username + ": " + req.body.highscore + "\n")

  res.json(req.body.highscore + " added to highscore list!")
})

module.exports = router;
