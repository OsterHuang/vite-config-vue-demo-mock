var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/user-profile', function(req, res, next) {
  res.json({
    name: "Oster Huang",
    nickname: "Oster",
    title: "Power lifting - Squat 300kg"
  })
});

module.exports = router;
