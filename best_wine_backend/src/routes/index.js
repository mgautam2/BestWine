/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app) {
    app.use('/api/rec', require('./recommender.js'));
};


