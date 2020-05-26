const bcrypt = require('bcryptjs');

const saltRound = 10;

let hashPassword = (plainPass) => {
    let salt = bcrypt.genSaltSync(saltRound);
    let hash = bcrypt.hashSync(plainPass, salt);
    return hash;
}

let comparePassword = (oldPass, hashPass) => {
    let promise = new Promise((resolve, reject) => {

        bcrypt.compare(oldPass, hashPass, (err, res) => {
            if (err) {
                console.log('error in compare with error - ' + err);
                reject(err);
            } else {
                resolve(res);
            }
        })

    })
    return promise;
}
// let comparePassword = (oldPass, hashPass, cb) => {
//     bcrypt.compare(oldPass, hashPass, (err, res) => {
//         if (err) {
//             console.log('error in compare with error - ' + err);
//             cb(err, null);
//         } else {
//             cb(null, res);
//         }
//     })
// }

module.exports = {
    hashPassword: hashPassword,
    comparePassword: comparePassword
}

