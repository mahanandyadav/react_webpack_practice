const mongoose=require('mongoose')

mongoose.connect('mongodb+srv://mny:QTCdKtIouJJWbUYN@cluster0.zxfwd.mongodb.net/LoginPractice?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useCreateIndex: true,
    // useUnifiedTopology: true,
    useFindAndModify: false
})