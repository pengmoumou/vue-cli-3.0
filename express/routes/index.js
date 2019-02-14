var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/demo/demo0', function(req, res, next) {
  res.json({
    status:'1',
    msg:'success',
    result:''
  })
});

router.post('/demo/demo1', function(req, res, next) {
  res.json({
    status:'1',
    msg:'success',
    result:''
  })
});

router.put('/demo/demo2', function(req, res, next) {
  res.json({
    status:'1',
    msg:'success',
    result:''
  })
});

router.delete('/demo/demo3', function(req, res, next) {
  res.json({
    status:'1',
    msg:'success',
    result:''
  })
});

module.exports = router;
