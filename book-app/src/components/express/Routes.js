const express = require('express');
const route = express.Router();

let s;
route.post('/add',(req,res)=>{
    console.log(req.body);
    s = req.body.data;
    res.status(200).send("registered.please login");
})
route.post('/users',(req,res)=>{
    // console.log(req.body);
    res.status(200).send(s);
})
// const getUsers = (req,res) =>{
//     const users = {
//         'user1':{firstName:'abc',lastName:'foehe',email:'woih@gmail.com',password:'wiv'},
//         'user2':{firstName:'wv',lastName:'qbe',email:'broih@gmail.com',password:'jregwt'},
//         'user3':{firstName:'bew',lastName:'cwq',email:'wfhyih@gmail.com',password:'hreg'}
//     }
//     res.status(200).send(users);
// }
// route.get('/users',getUsers);

module.exports=route;