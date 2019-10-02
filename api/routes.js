module.exports = function(app){
    const treasy = require('./controllers/treasy');

    app.get('/treasy/deals', treasy.deals);
    app.get('/treasy/deals_updates', treasy.deals_updates);
    app.get('/treasy/stages', treasy.stages);
    app.get('/treasy/deals_updates_group_month', treasy.deals_updates_group_month);
    app.get('/treasy/teste', treasy.teste);
};