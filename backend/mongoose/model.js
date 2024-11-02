const mongoose= require('mongoose')
const userSchema=new mongoose.Schema({
    name:{
        type:String,required:true,unique:true
    },
    age:{
        type:Number
    },
    branch:{
        type:String
    }
})

module.exports =mongoose.model("userInfo",userSchema);