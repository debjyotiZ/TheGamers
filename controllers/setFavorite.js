exports.setFavorite = function(req,res){
    var url = require('url');
    var url_parts = url.parse(req.url,true);
    var query = url_parts.query;
    
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://sbcd90:algo..addict9654@ds035498.mongolab.com:35498/sbcd90', function(err,db){
        if(err){
            console.log(err);
            return;
        }
        
        var collection = db.collection('Favorite');
        var data = {"from" : query.from,"to" : query.to};
        collection.insert(data, function(err,docs){
            if(err){
                console.log(err);
                res.end('{"error": "Data not inserted"}');
            }
            else{
                res.end('{"success": "Data successfully inserted"}');
            }
            db.close();
        });
    });
};