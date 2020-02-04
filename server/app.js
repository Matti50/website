var express = require("express");
var nodemailer = require("nodemailer");
var bodyparser = require("body-parser"); // to parse as JSON the incoming post requests and access the data via req.body

var app = express();




var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: "465",
    secure:true,
    auth: {
        user: "abc@gmail.com",
        pass: "def"
    }

    //SEARCH FURTHER......
});


app.use(bodyparser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.get("/", function(req,res){
    res.send("hello world");
    console.log(req.method + " " + req.url);
});



app.post("/sendmail",function(req,res){
    var mailOptions = {
        from:`${req.body.name} <${req.body.email}>`,
        to:"cicchittimatiascontact@gmail.com",
        subject:`${req.body.subject}`,
        text:`From: ${req.body.email} \n ${req.body.message}`
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err);
            res.send("error");
        }else{
            console.log("mail sent " + info)
            res.send("success");
        }
    })
})

app.listen(4000,function(){
    console.log("listening on port 4000");
})