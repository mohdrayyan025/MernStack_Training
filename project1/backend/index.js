const express = require('express')
const {MongoClient} =require('mongodb');
// const { disconnect } = require('mongoose');
const app = express()

const port = 3000
const mongoclient=new MongoClient('mongodb://localhost:27017/')

const dbconnect=async()=>{
    try{
        client= await mongoclient.connect()
        console.log("DB CONNECTED")
    }
    catch(err){
        console.log(err)
    }
}; dbconnect()


app.use(express.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/signin",async(req,res)=>{
    try{
        const {username,password} = req.body;
        console.log(username);
        const coll= client.db('Project').collection('signup');
        const cursor= await coll.find({username:username});
        const result= await cursor.toArray();
        console.log(result)
        if(result.length==1 && username==result[0].username && password ==result[0].password){
            res.send({ok:1,msg:"VALID USER"})
        }
        else{
            res.send({ok:0,msg:"NOT VALID USER"})
        }
        }
    catch(err){
        console.log(err)
    }
})

app.post("/signup",async(req,res)=>{
    try{
        const coll = client.db('Project').collection('signup');
        const cursor = await coll.insertOne(req.body);
        res.send({ok:1,msg:"USER CREATED"})
    }catch(err){
        res.send({ok:0,msg:"USER NOT CREATED TRY AFTER SOME TIME"})
    }
})


app.listen(port, () => {
  console.log(`SERVER RUNNING ON PORT ${port}`)
})