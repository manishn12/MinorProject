const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const app = express();       //express contain all the functions of the xpress and assigning it to app means app is have all the functionailty of xpress 

//middleware functions are the functions that is used to block a certain code until a desired thing is not happened
//below funtion is a middleware function and /about, middleware, (req, res) is how you write next(); is a ftn which performs task after middleware word


dotenv.config({ path: './config.env' });       //this ftn is used to import config.env file
require('./db/conn.js');                      // reuire conn.js file 
//const User = require('./model/userSchema.js');        // reuring schema here  


const port = process.env.PORT;                // making secure our port number

app.use(express.json());

app.use(require('./router/auth.js'));     // linked router file auth.js here

const middleware = (req, res, next) => {
   console.log("this function is in use congrats you are now understand what a middleware is");
   next();                                  //this is used after completion of certain function
}

app.get('/', (req, res) => {
    res.send("hello wrld i am here");
});

app.get('/about', middleware, (req, res) => {
    res.send("hello wrld i am in about section");
});

app.get('/contact', (req, res) => {
    res.send("hello wrld i am here in contact us section");
});

app.get('/signin', (req, res) => {
    res.send("hello wrld i am in login section thanks you!");
});

app.get('/signup', (req, res) => {
    res.send("hello wrld i am in signup section thansk mate ");
});

app.listen(port, () => {
    console.log(`server is connected to port number ${port}`);
})



//mongodb+srv://rohitmern:<password>@cluster0.9kh39.mongodb.net/myFirstDatabase?retryWrites=true&w=majority