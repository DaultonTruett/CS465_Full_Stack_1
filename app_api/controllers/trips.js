const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

const tripsList = async(req, res) => {
    const q = await Model
        .find({}) // return all records
        .exec();

        //console.log(q);

    if(!q){
        return res
            .status(404) 
            .json(err); // nothing found
    }else{ 
        return res
            .status(200) 
            .json(q); // trips data
    }
};

const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) // return single record
        .exec();

        //console.log(q);

    if(!q){
        return res
            .status(404) 
            .json(err); // nothing found
    }else{ 
        return res
            .status(200) 
            .json(q); // trips data
    }
};

const tripsAddTrip = async(req, res) => {
    const newTrip = new Trip ({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

    if(!q){
        return res
            .status(400)
            .json(err)
    }else{
        return res
        .status(201)
        .json(q)
    }

    //console.log(q)
}

const tripsUpdateTrip = async(req, res) => {
    const q = await Model
    .findOneAndUpdate(
        {'code': req.params.tripCode},
        {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }
    )
    .exec();

    if(!q){
        return res
            .status(400)
            .json(err);
    }else{
        return res
            .status(201)
            .json(q)
    }
};

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip
};