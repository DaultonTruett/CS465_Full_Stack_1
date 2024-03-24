const fs = require('fs');
const newsData = JSON.parse(fs.readFileSync('./data/news.json', 'utf8'));


// GET: news
const news = (req, res) => {
    res.render('news', {
        title: 'News - Travlr Getaways',
        newsData}
        );
};



module.exports = {
    news
}