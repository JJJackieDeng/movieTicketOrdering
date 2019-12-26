var express = require('express');
var router = express.Router();

var users = [{name: 'admin',pass: '123456'},
    {name: 'user',pass: '123456'}
];

router.route('/validate').post((req,res) =>{
    var user = users.find((item) =>{
        return item.name=req.body.name&&item.body.pass
    });
    res.json(user?user:{})
});

module.exports = Router;