const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res)=>{
    res.send('hello');
})

app.listen(port, (err)=>{
    if(err){
        console.log("error");
    }else{
        console.log(`listining on the port ${port}`)
    }
})