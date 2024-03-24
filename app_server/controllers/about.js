const fs = require('fs');
const aboutData = JSON.parse(fs.readFileSync('./data/about.json', 'utf8'));


// GET: about
const about = (req, res) => {
    res.render('about', {title: 'About - Travlr Getaways', aboutData});
};




module.exports = {
    about
}