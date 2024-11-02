const express=require("express")
const app=express()
const port=3000
parser=require('body-parser');

// app.set('view engine','ejs')
// app.get('/user',(req,res)=>{
//     res.render('home',{name: "RAYYAN"});
//     console.log(req.params)
// })
app.use

app.listen(port,()=>{
    console.log(`Server Running at port ${port}`);
})
