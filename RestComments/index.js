const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

const comments = [
    {
        id: 1,
        username : "Todd",
        comment : "nice I am loving it"
    },
    {
        id:2,
        username : "John",
        comment : "delete your account otherwise ... "
    },
    {
        id: 3,
        username : "Ron",
        comment : "nice car I am also thinking to buy it"
    },
    {
        id: 4,
        username : "Shon",
        comment : "Hey buddy dinner tonight"
    },
]

app.get('/comments', (req, res)=>{
    res.render('comments/index', {comments})
});

// this get request for getting the form in the response.
app.get('/comments/new', (req, res)=>[
    res.render('comments/new')
])
app.post('/comments', (req,res)=>{
    const {username, comment} =req.body; 
    comments.push({username, comment})
    //Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.
    res.redirect('/comments');
});

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === parseInt(id));
    res.render('comments/show', {comment})
})
app.listen(port, function(){
    console.log(`listining on the port ${port}`);
})