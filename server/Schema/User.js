import mongoose from 'mongoose';

const user = new mongoose.Schema( {
    fullname: {
        type: String,
        required: true,
        trim: true,
        min: 5,
        max: 20
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        index: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    ShopName:{
        type:String,
        required:true,
        trim:true,
    },
    ShopAddress:{
        type:String,
        required:true
    },
    District:{
        type:String,
        required:true
    },
    PinCode:{
        type:String,
        required:true
    },
    Features:{
        type:String
    },
});


const User=mongoose.model('User', user);

export default User;
