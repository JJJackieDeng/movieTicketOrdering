var express=require('express');
var app = new express;

var users = [
    {name:'admin',pass:'123456'},
    {name:'user',pass: '123456'}
];

app.post('/validate',(req,res)=>{
    res.send(users)
});

var port = process.env.PORT||3000;

app.listen(port);

console.log("app is listening on port"+port);