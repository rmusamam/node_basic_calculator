const express = require("express")

const app = express()

app.listen(3000,function(){
    console.log("3000 port in successfully Active")
});

app.get('/',function(req,res){
    res.sendFile(__dirname+'/home.html')
    // console.log(__dirname)

})

