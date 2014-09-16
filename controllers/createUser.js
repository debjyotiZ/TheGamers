exports.createUser = function(req,res){
    var url = require('url');
    var url_parts = url.parse(req.url,true);
    var query = url_parts.query;
    
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect('mongodb://sbcd90:algo..addict9654@ds035498.mongolab.com:35498/sbcd90', function(err,db){
        if(err){
            console.log(err);
            return;
        }
        var collection = db.collection('Users');
        var data = {"usertype" : query.usertype, "username" : query.username, "password" : query.password, "name" : query.name};
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