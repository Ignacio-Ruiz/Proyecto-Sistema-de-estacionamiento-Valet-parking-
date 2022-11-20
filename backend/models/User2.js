const mongoose = require("mongoose");

// Hash Contraseña
const bcrypt = require('bcrypt');
//const saltRounds = 10;
//const uniqueValidator = require('mongoose-unique-validator');


const roles = {
    values: ['ADMIN', 'OPERADOR','USER'],
    message: '{VALUE} no es un rol válido'
  }

const userSchema = new mongoose.Schema({
  Username:   { type: String,unique: true, required : [true, 'El nombre es necesario'] },
  password: { type: String, required: [true, 'Pass es necesario'] },
  role: { type: [String], default: 'USER', enum: roles ,required: [true, 'Roles are mandatory']},
  token: {type: String,required: [false, 'Session token is not mandatory'],default: '' },

  
});


userSchema.pre('save', function(next) {
    var user = this;

    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();

    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});



// Convertir a modelo
/*userSchema.pre('save',function(next){
if (this.isNew || this.isModified('password')) {
    const document=this;
    bcrypt.hash(document.password,saltRounds,(err,HashedPassword)=>{
        if (err) {
            next(err);
        }
        else{
            document.password = HashedPassword;
            next();
        }
    })
}
else{
    next();
}

});
*/
//userSchema.plugin(uniqueValidator, { message: 'Error, esperaba {PATH} único.' });

/*userSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
   }
*/
//coparar contraseña encyptada

userSchema.methods.comparePassword = function(password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports = User2 = mongoose.model('User2', userSchema);