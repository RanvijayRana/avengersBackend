const config = require('../config/appConfig')
const controller = require('../controller/controlLogic');

let setRouter = (app) => {
    baseUrl = config.apiVersion + '/avengers';

    app.get(baseUrl + '/allUser', controller.getAll);
    app.post(baseUrl + '/signup', controller.signup);
    app.post(baseUrl + '/login', controller.login);
    app.get(baseUrl + '/avengersData', controller.getAllAvengers);
    app.post(baseUrl + '/avengersData', controller.saveAvengers);

}

module.exports = {
    setRouter: setRouter
}