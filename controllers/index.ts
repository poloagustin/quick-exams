/// <reference path="../typings/tsd.d.ts" />

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

export = router;