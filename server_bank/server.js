let express = require('express'),
    app = express(),
    port = process.env.PORT || 7000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser'),
    cors = require('cors');

// mongoose instance connection url connection
mongoose.connect('mongodb://<Username>:<Password><MongoDBString>', {
    useMongoClient: true
});
mongoose.Promise = global.Promise;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

//Initialize app
let initApp = require('./api/app');
initApp(app);

app.listen(port);
console.log('Budget Tracker - Bank RESTful API server started on: ' + port);
