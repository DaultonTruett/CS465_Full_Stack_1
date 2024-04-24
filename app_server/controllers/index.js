const fs = require('fs');
const indexData = JSON.parse(fs.readFileSync('./data/index.json', 'utf8'));


// GET: homepage
const index = (req, res) => {
    res.render('index', {title: 'Travlr Getaways', indexData});
};



module.exports = {
    index
}