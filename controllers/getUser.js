exports.getUser = function(req,res){
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
        collection.find({"username": query.name}).toArray(function(err,results){
            if(err){
                console.log(err);
                res.end('{"error": "Data not returned"}');
            }
            else{
                console.log(results);
                res.end('{"success" : ' + JSON.stringify(results) + '}');
            }
            db.close();
        });
    });
};