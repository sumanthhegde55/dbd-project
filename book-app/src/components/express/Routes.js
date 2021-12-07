const express = require('express');
const route = express.Router();

route.post('/add',(req,res)=>{
    console.log(req.body);
    const str = 'your name is :' + req.body.firstName + req.body.lastName
    res.status(200).send(str);
})
const getUsers = (req,res) =>{
    const users = {
        'user1':{firstName:'abc',lastName:'foehe',email:'woih@gmail.com',password:'wiv'},
        'user2':{firstName:'wv',lastName:'qbe',email:'broih@gmail.com',password:'jregwt'},
        'user3':{firstName:'bew',lastName:'cwq',email:'wfhyih@gmail.com',password:'hreg'}
    }
    res.status(200).send(users);
}
route.get('/users',getUsers);

module.exports=route;