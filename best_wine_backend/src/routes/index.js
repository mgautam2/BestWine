/*
 * Connect all of your endpoints together here.
 */
module.exports = function (app) {
    app.use('/api/', require('./recommender.js'));
};


