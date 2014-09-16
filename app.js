var express = require('express');

var app = express();
app.set('views',__dirname + '/views');
app.engine('html',require('ejs').renderFile);
app.use(express.static(__dirname + '/public'));

app.get('/createUser', function(req,res){
    require('./controllers/createUser').createUser(req,res);
});

app.get('/getUser', function(req,res){
    require('./controllers/getUser').getUser(req,res);
});

app.get('/setFollow', function(req,res){
    require('./controllers/setFollow').setFollow(req,res);
});

app.get('/getFollow', function(req,res){
    require('./controllers/getFollow').getFollow(req,res);
});

app.get('/setFavorite', function(req,res){
    require('./controllers/setFavorite').setFavorite(req,res);
});

app.get('/getFavorite', function(req,res){
    require('./controllers/getFavorite').getFavorite(req,res);
});

app.get('/createStatus', function(req,res){
    require('./controllers/createStatus').createStatus(req,res);
});

app.get('/showStatus', function(req,res){
    require('./controllers/showStatus').showStatus(req,res);
});

app.get('/createMedicine', function(req,res){
    require('./controllers/createMedicine').createMedicine(req,res);
});

app.get('/getMedicine', function(req,res){
    require('./controllers/getMedicine').getMedicine(req,res);
});

app.get('/createReco', function(req,res){
    require('./controllers/createReco').createRecommendations(req,res);
});

app.get('/getReco', function(req,res){
    require('./controllers/getReco').getRecommendations(req,res);
});

app.get('/', function(req,res){
    res.render('index.html');
});

app.get('/messages', function(req,res){
    res.render('messages.html');
});
app.get('/profiles', function(req,res){
    res.render('profiles.html');
});
app.get('/follow', function(req,res){
    res.render('follow.html');
});

app.listen(3000,function(){
    console.log('Listening on port 3000');
});