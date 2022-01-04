const express = require('express')
const app = express()
const crypto = require('crypto-js')
const e = require('express')
const SALT = 'MY SECRET KEY SALT'
const IV = 16

const start = () => {

    app.listen(4000, () => {
        console.log('App is running on port http://localhost/4000')
    })
}

app.use(express.json())

app.post('/login', (req, res) => {
    try{
        const {password, userName} = req.body
        const decrypt = crypto.AES.decrypt(password, SALT, {iv: IV})
        const message = decrypt.toString(crypto.enc.Utf8)
        if(message == 'rohan123@' && userName == 'admin'){
            return res.status(200).json({response: 'Login Successfull' })
        }else{
            return res.status(400).json({response: 'Invalid userName or password'})
        }
    }catch(err){
        return res.status(500).json({error: err})
    }
})

module.exports = start