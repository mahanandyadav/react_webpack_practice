const express=require('express')
const app=express()
require('./src/db/db')

const loginRoute=require('./src/routes/login')


app.use(express.json())
app.use(loginRoute)



const port=process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})



