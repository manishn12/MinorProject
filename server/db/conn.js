const mongoose = require('mongoose');        // no need of using dotenv.config()


const db = process.env.DATABASE;              // process.env.database is needed line to access the mongodb url in secured form


mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,                                      // db is used to store the address of the database
    useUnifiedTopology: true,                               // mongoose.connect(db) is for connection
    useFindAndModify: false                                 // the remaining line is bcz to not get any error u have to right it as it is
}).then(() => {          
    console.log("connection successful");
}).catch((err) => console.log("connection is unsuccessful "))
