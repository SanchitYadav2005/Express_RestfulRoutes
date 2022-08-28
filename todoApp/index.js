const express = require("express");
const app = express();
const port = 3000;

//setting ejs.
app.set("view engine", 'ejs');
// setting express.json();
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// creating our fake data just for showing on the home page.

let todolist = [
    {
        id:1,
        username: "Jon",
        task : "work on the login page."
    },
    {
        id:2,
        username: "rizwan",
        task: "get the client list done."
    },
    {
        id:3,
        username: "Sanchit",
        task: "deploy the landing page."
    },
    {
        id:4,
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
    todolist.push({username,task, id: 5});
    response.redirect('/todo');
});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`listening on the port : ${port}`);
    }
})