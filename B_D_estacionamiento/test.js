const mongoose= require("mongoose");

const server= '127.0.01:27017';
const database= 'bd_estacionamiento';

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();

const { mongoose, Schema, model } = require('mongoose');
const UserSchema = new Schema({
    name: { type: String, required: [true, 'Name is mandatory'],
    },
    lastname: {type: String,
    required: [true, 'Lastname is mandatory'],
    },
    rut: {
    type: String,
    unique: true,
    required: [true, 'RUT is mandatory'],
    },
    },
    { timestamps: true },
);

const { mongoose, Schema, model } = require('mongoose');
Users = model('users', UserSchema)
const addUser = async () => {
    await Users.create({'name': 'name', 'lastname': 'lastname', 'rut': '1111111-1'})
    mongoose.disconnect()

}

addUser();