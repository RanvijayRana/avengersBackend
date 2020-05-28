const mongoose = require('mongoose');

const passwordLib = require('../libs/generatePass');
const beResponse = require('../libs/response');
const token = require('../libs/tokenLib');
const check = require('../libs/check');

const usersModel = mongoose.model('users');
const avengersModel = mongoose.model('avengers');

let getAll = (req, res) => {
    usersModel.find({}).exec((err, result) => {
        if (err) {
            let apiResponse = beResponse.generate(true, "error to fetch db data", 300, result);
            res.send(apiResponse);
        } else {
            let apiResponse = beResponse.generate(false, "db query data", 200, result);
            res.send(apiResponse);
        }
    })
}

let signup = (req, res) => {
    let signupData = new usersModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: parseInt(req.body.mobile),
        username: req.body.username,
        email: req.body.email,
        password: passwordLib.hashPassword(req.body.password)
    });

    signupData.save((err, result) => {
        if (err) {
            console.log('error to signup with message: ', err.message);
            res.send(err.message);
        } else {
            let apiResponse = beResponse.generate(false, 'signup successful', 200, result);
            res.send(apiResponse);
        }
    })
}

let login = (req, res) => {
    usersModel.findOne({
        $or: [
            { 'username': req.body.username },
            { 'email': req.body.email },
        ]
    }).exec((err, result) => {
        if (err) {
            res.send('error in db query to find the user');
        } else if (check.isEmpty(result)) {
            let apiResponse = beResponse.generate(true, 'Data not found', 300, null);
            res.send(apiResponse)
        } else {
            passwordLib.comparePassword(req.body.password, result.password)
                .then((compareResult) => {
                    if (compareResult) {
                        return token.generateToken(result);
                    } else {
                        let apiResponse = beResponse.generate(true, 'incorrect credential', 300, null);
                        res.send(apiResponse)
                    }
                }, (err) => {
                    let apiResponse = beResponse.generate(true, 'error while comparing password', 300, null);
                    res.send(apiResponse);
                })
                .then((tokenResult) => {
                    let apiResponse = beResponse.generate(false, 'auth-Token', 200, tokenResult);
                    res.send(apiResponse)
                }, (err) => {
                    let apiResponse = beResponse.generate(true, 'auth-Token generation error', 300, err.message);
                    res.send(apiResponse)
                });
        }

        // (passwordLib.comparePassword(req.body.password, result.password, (err, compareResult) => {
        //     if (err) {
        //         res.send("error while comparing password");
        //     } else if (compareResult) {
        //         token.generateToken(result, (err, tokenResult) => {
        //             if (err) {
        //                 let apiResponse = beResponse.generate(true, 'auth-Token generation error', 300, err.message);
        //                 res.send(apiResponse)
        //             }
        //             if (tokenResult) {
        //                 let apiResponse = beResponse.generate(false, 'auth-Token', 200, tokenResult);
        //                 res.send(apiResponse)
        //             }
        //         })
        //     }
        //     else {
        //         let apiResponse = beResponse.generate(true, 'password not matched', 201, result);
        //         res.send(apiResponse)
        //     }
        // }))
        // }
    })
}

let getAllAvengers = (req, res) => {
    avengersModel.find({}).exec((err, result) => {
        if (err) {
            let apiResponse = beResponse.generate(true, 'db error for get avengers data', 300, null);
            res.send(apiResponse);
        } else if (check.isEmpty(result)) {
            let apiResponse = beResponse.generate(false, 'no avengers data found', 201, result);
            res.send(apiResponse);
        } else {
            let apiResponse = beResponse.generate(false, 'Avengers list', 200, result);
            res.send(apiResponse);
        }
    })
}
let saveAvengers = (req, res) => {
    let avengersData = new avengersModel({
        avengerName: req.body.avengersName,
        characterName: req.body.charactersName,
        realName: req.body.realName,
        imageUrl: req.body.imageUrl,
        movie: req.body.movie.split(','),
        power: req.body.power.split(',')
    })

    avengersData.save((err, result) => {
        if (err) {
            let apiResponse = beResponse.generate(true, err.message, 300, null);
            res.send(apiResponse);
        } else {
            let apiResponse = beResponse.generate(false, 'Avengers list saved', 200, result);
            res.send(apiResponse);
        }
    })
}

module.exports = {
    getAll: getAll,
    signup: signup,
    login: login,
    getAllAvengers: getAllAvengers,
    saveAvengers: saveAvengers
}