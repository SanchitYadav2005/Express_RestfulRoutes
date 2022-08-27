const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();
const methodOverriding = require("method-override");

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public'));
app.use(methodOverriding('_method'));

let studentdata = [
    {
        id: uuidv4(),
        name: "Sanchit"
    },
    {
        id: uuidv4(),
        name: "Navneet"
    }
]

app.get('/', (req, res)=>{
   res.render('home')
})

app.listen(port, (err)=>{
    if(err){
        console.log("error");
    }else{
        console.log(`listining on the port ${port}`)
    }
})