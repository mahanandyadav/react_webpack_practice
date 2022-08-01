const express = require('express')
const fs=require('fs')
const path=require('path')
const loginRoute = new express.Router()

// const path=require('../data/data.json')

let pathFile=path.resolve(__dirname,'..','data','data.json')
function readFile(enco){
    try{
        return  JSON.parse( fs.readFileSync(pathFile,enco)  )
    }catch(err){
        console.log(err)
        return
    }
}
function writeFile(data){
    try{
        return fs.writeFileSync(pathFile,JSON.stringify(data))
    }catch(err){
        console.log(err)
        return
    }
}


let data=readFile('utf8')


loginRoute.post('/signup', (req, res) => {

    // console.log(req.body)
    data = [
        ...data,
       { ...req.body,key:[]}
    ]
    writeFile(data)
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
            writeFile(data)
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
