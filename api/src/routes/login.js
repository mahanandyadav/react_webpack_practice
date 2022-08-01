const express = require('express')
const fs=require('fs')
const loginRoute = new express.Router()


function readFile(path,enco){
    try{
        return  JSON.parse( fs.readFileSync(path,enco)  )
    }catch(err){
        console.log(err)
        return
    }
}
function writeFile(path,data){
    try{
        return fs.writeFileSync(path,JSON.stringify(data))
    }catch(err){
        console.log(err)
        return
    }
}


let data=readFile('./data/data.json','utf8')


loginRoute.post('/signup', (req, res) => {

    // console.log(req.body)
    data = [
        ...data,
       { ...req.body,key:[]}
    ]
    writeFile('./data/data.json',data)
    res.send({ "message": 'signup success', "users": data })
})

loginRoute.put('/login', (req, res) => {
    try {
        const user = data.filter(obj => obj.email === req.body.email)
        if (user[0].password === req.body.password) {
            console.log(data.splice(data.findIndex(x => x.email === req.body.email), 1))
            data = [
                ...data,
                { ...user[0], key: [...user[0].key, 'xyz'] }
            ]
            writeFile('./data/data.json',data)
            console.log('login sucessfull')
            res.send({ "message": "login done", 'data': data })
        } else {
            res.status(404).send()
        }

    } catch (err) {
        console.log(err)
        res.send({ "message": err })
    }
})



module.exports = loginRoute;
