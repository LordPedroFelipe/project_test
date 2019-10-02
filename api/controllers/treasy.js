exports.deals = function(req, res) {
    req.con.query("SELECT * FROM deals", function(err, rows) {
        // console.log(err, rows);
        res.json(rows);
    });
};

exports.deals_updates = function(req, res) {  
    req.con.query("SELECT * FROM deals_updates", function(err, rows) {
        // console.log(err, rows);
        res.json(rows);
    });
};

exports.stages = function(req, res) {    
    req.con.query("SELECT * FROM stages", function(err, rows) {
        // console.log(err, rows);
        res.json(rows);
    });
};

exports.deals_updates_group_month = function(req, res) {
    const query = "SELECT stage_to, MONTH(update_date) as month , YEAR(update_date) as year, COUNT(*) as count "+
                "FROM deals_updates "+
                "WHERE YEAR(update_date) = '2017'"+
                "GROUP BY MONTH(update_date), YEAR(update_date), stage_to ORDER BY 2";

    req.con.query(query, function(err, rows) {
        console.log(err);
        res.json(rows);
    });
};

exports.teste = function(req, res) {
    const query = "SELECT MONTH(add_date) as month , YEAR(add_date) as year, COUNT(*) as count "+
                "FROM deals "+
                "WHERE YEAR(add_date) = '2017'"+
                "GROUP BY MONTH(add_date), YEAR(add_date)";

    req.con.query(query, function(err, rows) {
        console.log(err);
        res.json(rows);
    });
};