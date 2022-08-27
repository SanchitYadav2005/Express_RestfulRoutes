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
app.use(express.urlencoded({extended: true}))
app.use(express.json())

let studentdata = [
    {
        id: uuidv4(),
        student: "Sanchit",
        moto: "The purpose of our lives is to be happy."
    },
    {
        id: uuidv4(),
        student: "Navneet",
        moto: "Life is what happens when you're busy making other plans."
    },
    {
        id: uuidv4(),
        student: "Abhishek",
        moto: "Get busy living or get busy dying."
    },
    {
        id: uuidv4(),
        student: "Rohit",
        moto:  "You only live once, but if you do it right, once is enough."
    },
    {
        id: uuidv4(),
        student: "Nirdesh",
        moto:  "Many of life’s failures are people who did not realize how close they were to success when they gave up."
    }
]

app.get('/', (req, res)=>{
   res.render('home', {studentdata})
});
app.get('/new', (req, res)=>{
    res.render('new')
});
app.post('/', (req,res)=>{
    const {student, moto} = req.body;
    studentdata.push({student, moto, id: uuidv4()})
    res.redirect('/');
});
app.get('/:id', (req, res)=>{
    const {id} = req.params;
    const student = studentdata.find(c => c.id == id);
    res.render('show', {student})
    console.log(req.params)
});

app.get('/:id/edit', (req, res)=>{
    const {id} = req.params;
    const student = studentdata.find(c => c.id == id);
    res.render('edit', {student})
});

app.patch('/:id', (req, res)=>{
    const {id} = req.params;
    const newMoto = req.body.moto;
    const foundid = studentdata.find(c => c.id == id);
    foundid.moto = newMoto;
    res.redirect('/');
})

app.listen(port, (err)=>{
    if(err){
        console.log("error");
    }else{
        console.log(`listining on the port ${port}`)
    }
})