//const fs = require('fs');
//const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8'));

const tripsEndpoint = 'http://localhost:3000/api/trips';
const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
}

// GET: travel
const travel = async function(req, res, next){
    console.log('TRAVEL CONTROLLER BEGIN');
    await fetch(tripsEndpoint, options)
    .then(res => res.json())
    .then(json => {
        console.log(json);

        let msg = null;

        if(!(json instanceof Array)){
            message = 'API lookup error';
            json = [];
        }else{
            if(!json.length){
                msg = 'No trips exist in our database.';
            };
        };

        res.render('travel', {
            title: 'Travlr Getaways',
            pageName: 'Travel',
            trips: json
        });
    })
    .catch(err => res.status(500).send(e.message));
};




module.exports = {
    travel
}