const express = require("express")
const cors = require("cors")

const app = express()
const port = 3009

app.use(cors());
app.use(express.json());

const users = [
    {id:1,name:"Alice"},
    {id:2,name:"Bob"},
    {id:3,name:"Charlie"},
    {id:4,name:"John"},
    {id:5,name:"Jack"},
]

app.get("/users",(req,res)=>{
    res.json(users)
})

app.post("/users",(req,res)=>{
    const newUser = req.body;
    users.push(newUser)
    res.status(2001).json(newUser)
})

app.listen(port,()=>{
    console.log('port running in',port)
})