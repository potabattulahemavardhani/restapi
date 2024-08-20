// import express module
 var express=require('express')

 var app=express()
 var port=2000;

 app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>')
})

app.get('/about',(req,res)=>{
    res.send('<h1>About page</h1>')
})
app.get('/users/:name',(req,res)=>{
    var userName=req.params.name
    res.send(`Hello,${userName}!`)
})
app.listen(port,()=>{
    console.log('server running')
})