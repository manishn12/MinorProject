const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]

});




// performing hashing here means securing passvord and cpassvord

userSchema.pre("save", async function(next){
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});


//here generation of tokens take place

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}




const User = mongoose.model('USERINFO', userSchema);    //it is for sending our schema to db using model ftn, "USeR" is our collection     
                                                
module.exports = User;          // exporting it                 // and userSchema is the structure of our Schema that is stored in it
                                

