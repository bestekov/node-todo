// Adding seed data

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController'); 

var port = process.env.PORT || 3000;

app.use( '/', express.static( __dirname + '/public' ) );

app.use('/assets', express.static( __dirname + 
'/public' ));

app.set( 'view engine', 'ejs' );

console.log('CONN =', config.getDbConnectionString() );
mongoose.connect(config.getDbConnectionString(), { useNewUrlParser: true } );
setupController(app);
apiController(app);

app.listen(port);