require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('middleware/auth/jwt');
const errorHandler = require('middleware/error/error');
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

//use jwt auth to secure the api
app.use(jwt());

//api routes
app.use('/users',require('./routes/user'));

//global error handler
app.use(errorHandler);

//start server
const port = process.env.PORT;
const server = app.listen(port, function (){
    console.log('server listening on port ' + port);
})

