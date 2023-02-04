/* BEFORE
var express = require('express');
var router = express.Router();

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
//Still learning how this all works so I'm keeping this here for now.

//After
const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
//start express, start router, set controller requirements

//Get homepage
router.get('/', ctrlMain.index);
//calls router to get controller

module.exports = router;
