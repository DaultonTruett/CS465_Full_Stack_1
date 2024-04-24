const fs = require('fs');
const contactData = JSON.parse(fs.readFileSync('./data/contact.json', 'utf8'));


// GET: contact
const contact = (req, res) => {
    res.render('contact', {
        title: 'Contact - Travlr Getaways',
        pageName: 'CONTACT',
        contactData
    });
}

module.exports = {
    contact
};