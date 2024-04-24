const fs = require('fs');
const roomsData = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));


// GET: rooms
const rooms = (req, res) => {
    res.render('rooms', {
        title: 'Rooms - Travlr Getaways',
        pageName: "Rooms",
        roomsData
    });
};



module.exports = {
    rooms
}