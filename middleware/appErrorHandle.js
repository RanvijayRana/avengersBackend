const beResponse = require('./../libs/response');

let errorHandle = (err, req, res, next) => {
    let apiResponse = beResponse.generate(true, 'Application error handler called', 500, null);
    res.send(apiResponse);
}
let notFoundHandler = (req, res, next) => {
    let apiResponse = beResponse.generate(true, 'route not found', 500, null);
    res.send(apiResponse);
}

module.exports = {
    errorHandle: errorHandle,
    notFoundHandler: notFoundHandler
}