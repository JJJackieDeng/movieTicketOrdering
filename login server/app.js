var express = require('express')
bodyParser = require('body-parser')
var app = new express()

var users = [
    { name: 'admin', pass: '123' },
    { name: 'user', pass: '321' }
]

app.post('/validate', (req, res) => {
    var user = users.find((item) => {
        return item.name == req.body.name && item.pass == req.body.pass
    })
    res.json(user ? user : {})
})

var port = process.env.PORT || 3000

app.listen(port)
console.log('app is listening on port: ' + port)

