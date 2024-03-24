const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));


// GET: travel
const travel = (req, res) => {
    res.render('travel',
    {
        title: 'Travlr Getaways',
        pageName: "Travel",
        trips
    });
};




module.exports = {
    travel
}