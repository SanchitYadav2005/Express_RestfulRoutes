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
        username: "Jon",
        task : "work on the login page."
    },
    {
        username: "rizwan",
        task: "get the client list done."
    },
    {
        username: "Sanchit",
        task: "deploy the landing page."
    },
    {
        username: "Harry",
        task: "manage all the team members and their meetings"
    }
]

//getting the response on the home page
app.get('/todo', (request, response)=>{
    response.render('home', {todolist});
});

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log(`listening on the port : ${port}`);
    }
})