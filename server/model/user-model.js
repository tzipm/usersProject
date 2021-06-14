const mongoose=require('mongoose')
const userSchema = mongoose.Schema({
      name: {type: String,required: true},
      email: {type: String,required: true},
      city: {type: String,required: true},
      age: {type: Number,required: true, max:70},
      phone: {type: String,required: true},
    }
  )
  module.exports=mongoose.model('user',userSchema)
