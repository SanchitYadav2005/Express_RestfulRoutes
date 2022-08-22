const express = require("express");
const app = express();
const port = 3000;
//This is a built-in middleware function in Express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({extended: true}))

app.get('/food', (req,res)=>{
    res.send("get request accepted!")
})

app.post('/food', (req,res)=>{
    //Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as body-parser and multer.
    const {meat, qty} = req.body;
    res.send(`your ${meat} ${qty}`)
})

app.listen(port, ()=>{
    console.log(`listining on the port ${port}`);
})