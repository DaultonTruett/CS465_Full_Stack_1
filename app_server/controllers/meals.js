const fs = require('fs');
const mealsData = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));


// GET: meals
const meals = (req, res) => {
    res.render('meals', {
        title: 'Travlr Getaways',
        pageName: 'Meals',
        mealsData}
        );
};



module.exports = {
    meals
}