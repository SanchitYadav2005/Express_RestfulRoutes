const express = require("express");
const app = express();
const port = 3000;
const randomId = require('random-id');

//setting the length of id and pattern
const length = 5;
const pattern = 'aA0';
let id = randomId(length, pattern)

//setting ejs.
app.set("view engine", 'ejs');
// setting express.json();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// creating our fake data just for showing on the home page.

let todolist = [
    {
        id:id,
        username: "Jon",
        task : "work on the login page."
    },
    {
        id:id,
        username: "rizwan",
        task: "get the client list done."
    },
    {
        id:id,
        username: "Sanchit",
        task: "deploy the landing page."
    },
    {
        id:id,
        username: "Harry",
        task: "manage all the team members and their meetings"
    }
]

//getting the response on the home page
app.get('/todo', (request, response)=>{
    response.render('home', {todolist});
});
// setting up a get request to get a form back for creating a new taks.
app.get('/todo/new', (request, response)=>{
    response.render('newTask')
});
// setting up post request to get the paramaters and add them to the array.
app.post('/todo', (request, response)=>{
    const {username, task} = request.body;
    todolist.push({username,task, id: id});
    response.redirect('/todo');
});
// setting the get request for the route /todo/:userId.
app.get('/todo/:id', (request, response)=>{
    const {id} = request.params;
    let findId = todolist.find()
    response.render('show', {findId});
    console.log(findId)
})

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`listening on the port : ${port}`);
    }
})