const mongoose=require('mongoose')

const userSchema=new mongoose.mongoose.Schema({
    email:{
        type:String,
        require:true,
        trim:true,
        validate(value){
            if(!value.includes('@')    ){
                throw   new Error('email error')
            }
        }

    },
    password:{
        type:String,
        require:true,
        trim:true
    }
})

const Users=mongoose.model('Users',userSchema)

module.exports=Users;