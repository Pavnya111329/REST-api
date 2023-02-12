
const mongoose = require("mongoose")


mongoose.set('strictQuery', true);

const connectDB = ()=>{
    mongoose.connect (process.env.DB_URl,{
    
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Server is connected with mongodb")
    }).catch((error)=>{
        console.log(error)
    })
    
}

module.exports = connectDB