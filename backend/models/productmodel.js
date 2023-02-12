const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: [true, "price must be provided"]
    },
    featured : {
        type : Boolean,
        default : false
    },
    rating:{
        type : Number,
        default : false

    },
    // created : {
    //     type : Date,
    //     default : Date.now()
    // },
    company :{
        type : String,
        require : true
    //     enum : {
    //     values :["apple","samsung","redmi","nokia","dell"],
    //     message : `{VALUE} is not supported`,
    // }
}
},{timestamps:true})

module.exports = mongoose.model("Product",productSchema)
