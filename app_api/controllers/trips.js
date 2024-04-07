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

module.exports = {
    tripsList,
    tripsFindByCode
};