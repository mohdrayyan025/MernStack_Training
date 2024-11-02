// // console.log("Mohd Rayyan")

// const https=require('http')
// const hostname="127.0.0.1"

// const port=4000

// const server=http.createServer((req,res) =>{
//     res.end("Hello");
    
// })

// server.listen(port,hostname,()=>{
//     console.log('Server runs at port  ${port} number')
// })







// const express= require('express')
// const hostname= '127.0.0.1';
// const port =3000;



// const app=express();
// app.get('/home',(req,res)=>{
//     res.send("Hello, I am Your Home Page")

// })

// app.post('/home',(req,res)=>{
//     res.send("i am in post - home")
// })
// app.listen(port,()=>{
//     console.log(`Server Running at port ${port}`);
// })


const express= require('express')
const {MongoClient}=require('mongodb');
const ip=require('ip')
const fs=require('fs')
const hostname= '127.0.0.1';
const port =3000;



const app=express();
app.use(express.json())
//middleware
const mymiddleware=(res,req,next)=>{
    const d= new Date();
    console.log("middleware is running")
    // console.log(req.url)
    
    // fs.appendFile('mytext.txt',`Request from this ${ip.address()}\n`,(err)=>{
    //     console.log(err)
    //     })

    // fs.appendFile('mytext.txt',`Request from this ${ip.address()} on ${d} \n`,(err)=>{
    //     console.log(err);
    // })

    fs.appendFile('mytext.txt',`Request coming for ${req.url} from this ${ip.address()} on ${d} \n`,(err)=>{
        console.log(err);
    })

    // console.log(ip.address())
    next();
}
app.use(mymiddleware);
//

// app.get('/:name',(req,res)=>{
//     // console.log(req.query.name)
//     // const name =req.query.name;
//     // const loc=req.query.location;
//     // res.send(`College name is ${name} and location is ${loc}`)
//     try{
//         res.send(req.params.name)

//     }
//     catch(err){
//         console.log(err)
//     }
// })
app.get('/search',async(req,res)=>{
    try{
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    // const client = await MongoClient.connect('mongodb+srv://mohdrayyan8010:rtbZahN9E9o5YLmD@cluster1.16cj9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1');
    const coll = client.db('project1').collection('user');
    // const cursor = await coll.find({name:req.query.name});
    // const cursor = await coll.find({age:{$gt:Number(req.query.age)},branch:{$eq:"CSE"}});
    const cursor = await coll.find({age:{$gt:Number(req.query.age)},branch:req.query.branch});
    const result = await cursor.toArray();
    await client.close();
    console.log(result)
    res.send(result)
    }
    catch(err){
        console.log(err)
    }

})
app.put('/update',(req,res)=>{
    res.send("Update")

})
app.post('/addUser',(req,res)=>{
    console.log(req.body)
    res.send("Add User")

})
app.delete('/delete',(req,res)=>{
    res.send("DELETE")

})
app.delete('/userdelete',(req,res)=>{
    res.send("USERDELETE")

})
app.post('/home',(req,res)=>{
    res.send("i am in post - home")
})
app.all('*',(req,res)=>{
    res.status(404).send("PAGE NOT FOUND")

})
app.listen(port,()=>{
    console.log(`Server Running at port ${port}`);
})
