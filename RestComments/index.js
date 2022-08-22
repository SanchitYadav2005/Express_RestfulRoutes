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
        username : "Todd",
        comment : "nice I am loving it"
    },
    {
        username : "John",
        comment : "delete your account otherwise ... "
    },
    {
        username : "Ron",
        comment : "nice car I am also thinking to buy it"
    },
    {
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
})
app.listen(port, function(){
    console.log(`listining on the port ${port}`);
})