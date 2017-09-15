var express = require('express');
var router = express.Router();

var users = [];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res) {
  if (!req.body.id || users.filter(u => u.id === req.body.id).length > 0) {
    res.sendStatus(401);
  } else {
    users.push(req.body);
    res.sendStatus(200);
  }

})

router.delete('/:id', function(req,res) {
  users = users.filter(u => u.id !== req.params.id)
  res.sendStatus(200);
})

router.get('/:id', function(req, res) {
  res.json(users.filter(u => u.id === req.params.id));
})

module.exports = router;
