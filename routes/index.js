var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit', (req, res) => {
  if (!req.body.key || req.body.key != "CodingPirates") return res.send("Invalid key.");
  if (!req.body.username || !req.body.score) return res.send('Please include username AND score.\nExample: {"key": "key", "username": "codingpirates", "score": 45}')

  fs.appendFileSync('./highscores.txt', `${req.body.username}: ${req.body.score}\n`)

  res.json(`${req.body.score} added to highscore list!`)
})

router.get('/scores', (req, res) => {
  fs.readFile('./highscores.txt', 'utf-8', (err, data) => {
    res.send(data)
  })
})

router.post('/clearScores', (req, res) => {
  if (!req.body.key || req.body.key != "clearCPP") return res.send("Invalid or no key.");

  fs.writeFile('./highscores.txt', '', () => {return res.send("Cleared file")})
})

module.exports = router;
