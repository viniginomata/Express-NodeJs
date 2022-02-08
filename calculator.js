const express = require ("express");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req,res)=>{
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1+num2;



    res.send("Thanks for use the Calculator, your result is "+result);
});
app.listen(3000, function(){
    console.log("server started on 3000")
});
