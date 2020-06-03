const config = require('../config/appConfig')
const controller = require('../controller/controlLogic');

let setRouter = (app) => {
    baseUrl = config.apiVersion + '/avengers';

    /**
     * @api {get} /api/v1/avengers/allUser Request for all user details
     * @apiName UserDetails
     * @apiGroup UserCredential
     * 
     * @apiParam {Number} [age=18]          Optional Age with default 18.
     * 
     * @apiSuccess {Object} apiResponse
     * 
     * @apiSuccessExample Success-Response:
     *      HTTP/1.1 200 OK
     *      {
     *          "error": false,
     *          "message": "db query data",
     *          "status": 200,
     *          "data": [{
     *              "firstName": "Ranvijay",
     *              "lastName": "Rana",
     *              "username": "ranvijay.144",
     *              "mobile": 9751862357,
     *              "email": "r@g.com",
     *              "password": "12345",
     *              "_id": "5eb6df4c383e2424a4ce402b",
     *              "__v": 0
     *          }]
     *      }
     * @apiError Error in db
     * 
     * @apiErrorExample Error-Response
     *      HTTP/1.1 error in db
     *      {
     *          "error": true,
     *          "message": "error to fetch db data: - ",
     *          "status": 302,
     *          "data": null
     *      }
     */
    app.get(baseUrl + '/', (req, res) => {
        res.send('hello Ranvijay');
    })
    app.get(baseUrl + '/allUser', controller.getAll);
    app.post(baseUrl + '/signup', controller.signup);
    app.post(baseUrl + '/login', controller.login);
    app.get(baseUrl + '/avengersData', controller.getAllAvengers);
    app.post(baseUrl + '/avengersData', controller.saveAvengers);

}

module.exports = {
    setRouter: setRouter
}