const cluster = require('cluster')
process.env.UV_THREADPOOL_SIZE=1

if (cluster.isMaster) {
    cluster.fork();
    // cluster.fork();
    // cluster.fork();
    // cluster.fork();
} else {

    const express = require('express')
    const app = express()
    const crypto =require('crypto')
    app.use(express.json())

   
    app.get('/', (req, res) => {

        const start =Date.now()
        crypto.pbkdf2('a','b',100000,512,'sha512',()=>{
            console.log('1',Date.now()-start)
            res.send('hello')
        })
        
    })

    app.get('/fast',(req,res)=>{
        res.send('fast')
    })

    const port = process.env.PORT || 3000
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })


}



