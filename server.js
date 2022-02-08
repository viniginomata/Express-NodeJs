const { response } = require("express");
const express = require ("express");
const app = express();

app.get("/", function(req, res){
    res.send("<h1>hello</h1>")
});
app.get("/contact",function(req,res){
    res.send("Contact me at vinig-inomata@hotmail.com")
});
app.get("/about", (req,res)=>{
    res.send("<h3>My name is Vinicius and i'm learning back end development.</h3>")
})
app.get("/hobbies", (req,res)=>{
    res.send("<ul><li>Drink</li><li>Hang out</li><li>Games</li></ul>")
})

app.listen(3000, function(){
    console.log("server started on 3000")
});

