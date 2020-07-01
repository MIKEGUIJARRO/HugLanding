var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect('mongodb://localhost/copa_integrame', {useUnifiedTopology: true, useNewUrlParser: true});

// APP CONFIG
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE Schema creation

var schema = new mongoose.Schema({
    //Pendiente por definir
});



//RESTFULL ROUTES
app.get('/', function(req, res){
    res.redirect('/copaintegrame');
});

//INDEXROUTE
app.get('/copaintegrame', function(req, res){
    res.render('index');
});

app.listen(3000, function(){
    console.log('Server running');
});