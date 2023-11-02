import { Schema,model } from "mongoose"

const HotelSchema=new Schema({
    name:{
        type:String,
        requuired:true
    },
    type:{
        type:String,
        requuired:true
    },
    city:{
        type:String,
        requuired:true
    },
   address:{
        type:String,
        requuired:true
    },
    distance:{
        type:String,
        requuired:true
    },
    photos:{
        type:[String]
    },
    desc:{
        type:String,
        requuired:true
    },
    rating:{
        type:String,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },
    cheapestPrice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }

})

export default model('Hotel',HotelSchema)
