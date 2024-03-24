const express = require('express');
const router = express.Router();

const ctrlContact = require('../controllers/contact');

/* GET contact page. */
router.get('/', ctrlContact.contact);


module.exports = router;