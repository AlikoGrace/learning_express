const express = require ('express');
const app = express()

const portNumber = 1234
const logins= [
    {username: "aliko",password: "daniel"},
    {username: "bobCumulus", password: "Prem@1999"}
]

app.use(express.json())

app.get('/',(req, res)=>{
    res.send('Homepage')
})

app.post('/',(req, res)=>{
    const request= req.body;
    res.send('i am sending')
})

app.post('/login',(req, res)=>{
    const {password,username}= req.body
    if(logins.some((x)=>x.username===username)){
        const user=logins.find((x)=>x.username===username)
        if(user.password===password){
            res.json({msg:"Login successful"})
        }
        else{
            res.send("Invalid password")
        }
    }else{
        res.send('Sorry your account does not exist')
    }
})

app.listen(portNumber,()=>{
    console.log(`Running on port ${portNumber}`)
})

