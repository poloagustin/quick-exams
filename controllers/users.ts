/// <reference path="../typings/tsd.d.ts" />

var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('express-jwt');

module.exports = router