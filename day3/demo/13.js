/* 13 post请求 */


var express =require('express');
var bodyParser = require('body-parser')
var app = express();

app.set("view engine","ejs");
app.get('/',function(req,res){
    res.render('form')
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res) {
    console.log(req.body);
})

app.listen(8080)