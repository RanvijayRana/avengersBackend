const jwt = require('jsonwebtoken');
const shortid = require('shortid');

let secretKey = 'someVeryRandomKey';

let generateToken = (data) => {
    let promise = new Promise((resolve, reject) => {

        try {
            let claims = {
                jwtid: shortid.generate(),
                iat: Date.now(),
                exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
                sub: 'authToken',
                iss: 'ranvijayAvengers',
                data: data
            }
            let tokenDetails = {
                token: jwt.sign(claims, secretKey)
            }
            resolve(tokenDetails);
        } catch (err) {
            console.log("error to generate authtoken :" + err);
            reject(err);
        }
    })
    return promise;
}
// let generateToken = (data, cb) => {
//     try {
//         let claims = {
//             jwtid: shortid.generate(),
//             iat: Date.now(),
//             exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 30),
//             sub: 'authToken',
//             iss: 'ranvijayAvengers',
//             data: data
//         }
//         let tokenDetails = {
//             token: jwt.sign(claims, secretKey)
//         }
//         cb(null, tokenDetails);
//     } catch (err) {
//         console.log("error to generate authtoken :" + err);
//         cb(err, null);
//     }
// }

let verifyClaim = (token, cb) => {
    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            console.log('error to verify auth : ' + err);
            cb(err, null);
        } else {
            console.log("user verified with data : ");
            console.log(decoded);
            cb(null, decoded)
        }
    });
}

module.exports = {
    generateToken: generateToken,
    verifyClaim: verifyClaim
}