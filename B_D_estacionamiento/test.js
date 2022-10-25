const mongoose= require("mongoose");

const server= '127.0.01:27017';
const database= 'bd_estacionamiento';

const connectDB= async () => {
    try {
        await mongoose.connect(`mongodb://${server}/${database}`)

        console.log('MongoDB connected!!');
        mongoose.disconnect()
    } catch (err) {
        console.log('Failed to connect to MongoDB', err);
    }
};

connectDB();