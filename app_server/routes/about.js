const express = require('express');
const router = express.Router();

const ctrlAbout = require('../controllers/about');

/* GET about page. */
router.get('/', ctrlAbout.about);




module.exports = router;
