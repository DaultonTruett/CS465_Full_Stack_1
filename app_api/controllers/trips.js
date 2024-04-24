const mongoose = require('mongoose');
// registers model
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');
const User = mongoose.model('users');


const getUser = async(req, res, callback) => {
    if (req.auth && req.auth.email) {
        try{
            const user = await User.findOne({email: req.auth.email}).exec();

            if(!user) {
                return res
                    .status(404)
                    .json({message: "User not found"});
            }
            callback(req, res, user.name);
            
        } catch(err) {
            return res.status(404).json({message: "User not found"});
        }
    }
};

const tripsList = async(req, res) => {
    const q = await Model.find({}).exec();
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
    const q = await Model.find({'code' : req.params.tripCode}).exec();
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
    await getUser(req, res, (req, res) => {
        Trip.create({
                code: req.body.code,
                name: req.body.name,
                length: req.body.length,
                start: req.body.start,
                resort: req.body.resort,
                perPerson: req.body.perPerson,
                image: req.body.image,
                description: req.body.description
            })
            .then(trip => {
                if(!trip){
                    return res
                        .status(404)
                        .send({
                            message: "Trip not found with code " + req.params.tripCode
                        });
                }
                res.send(trip);
            })
            .catch(err => {
                if(err.kind === 'ObjectId'){
                    return res.status(404).send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
                }
                return res.status(500).json(err);
            });
        });
}


const tripsUpdateTrip = async(req, res) => {
    await getUser(req, res, (req, res) => {
        Trip.findOneAndUpdate(
                {'code': req.params.tripCode}, {
                    code: req.body.code,
                    name: req.body.name,
                    length: req.body.length,
                    start: req.body.start,
                    resort: req.body.resort,
                    perPerson: req.body.perPerson,
                    image: req.body.image,
                    description: req.body.description
                }, {new: true})
                .then(trip => {
                    if(!trip){
                        return res
                            .status(404)
                            .send({message: "Trip not found with code " + req.params.tripCode});
                    }
                    res.send(trip);
                })
                .catch(err => {
                    if(err.kind === 'ObjectId'){
                        return res
                            .status(404)
                            .send({message: "Trip not found with code " + req.params.tripCode});
                    }
                    return res
                        .status(500)
                        .json(err);
                }
            );
    });
};

const tripsDeleteTrip = async(req, res) => {
    await getUser(req, res, (req, res) => {
        Trip.findOneAndDelete({'code': req.params.tripCode})
        .then(res.send({message: "OK"}))

        .catch(err => {
            if(err.kind === 'ObjectId'){
                return res
                    .status(404)
                    .send({message: "Trip not found with code " + req.params.tripCode});
            }
            return res
                .status(500)
                .json(err);
        });
    });
};



module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
};