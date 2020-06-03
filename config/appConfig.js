let appConfig = {};

appConfig.port = process.env.PORT || 3000;
appConfig.allowedCorsOrigin = '*';
appConfig.env = 'dev';
appConfig.db = {
    uri: 'mongodb://ranvijay:rv144#@ds031792.mlab.com:31792/heroku_tvtkwnmt'
    // uri: 'mongodb://127.0.0.1:27017/avengersDbs'
};
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    env: appConfig.env,
    db: appConfig.db,
    apiVersion: appConfig.apiVersion
}
