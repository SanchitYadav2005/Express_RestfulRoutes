const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4(); //generates unique id's
// importing method overiding method or package;
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
const methodOveriding = require('method-override');

//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn’t support it.
app.use(methodOveriding('_method'))
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

const comments = [
    {
        id: uuidv4(),
        username : "Todd",
        comment : "nice I am loving it"
    },
    {
        id:uuidv4(),
        username : "John",
        comment : "delete your account otherwise ... "
    },
    {
        id: uuidv4(),
        username : "Ron",
        comment : "nice car I am also thinking to buy it"
    },
    {
        id: uuidv4(),
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
    comments.push({username, comment, id : uuidv4()})
    //Redirects to the URL derived from the specified path, with specified status, a positive integer that corresponds to an HTTP status code . If not specified, status defaults to “302 “Found”.
    res.redirect('/comments');
});

app.get('/comments/:id', (req,res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', {comment})
});
// this is for getting a form in return to edid the comment;
app.get('/comments/:id/edit', (req, res)=>{
    const {id} = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', {comment});
})
//The HTTP PATCH request method applies partial modifications to a resource.
app.patch('/comments/:id', (req, res)=>{
    const {id} = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments');
});

app.listen(port, function(){
    console.log(`listining on the port ${port}`);
})