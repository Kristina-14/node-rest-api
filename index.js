const express = require('express');
const fs = require('fs');
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

//Middleware - Plugin
app.use(express.urlencoded({ extended: false}));

//routes
//get the full user info in the JSON format if used for the mobile app.
app.get("/api/users", (req, res) =>{
    return res.json(users);
});

//if want to display on the web page as a simple HTML page.
app.get("/users", (req, res) => {
    const html = `
    <ul>
    ${users.map( (user) => `
    <li>${user.first_name}</li>
    <ul><li>${user.email}</li>
    <li>${user.job_title}</li></ul>
    `).join("")}
    </ul>
    `
    return res.send(html);
});

//will return the user whose id is mentioned in the get request.
app
.route("/api/users/:userId")
.get((req, res) =>{
    const userId = Number(req.params.userId);
    const user = users.find( (user) => user.id === userId);
    return res.json(user);
})
.patch((req, res) => {
    //Edit user with the given id
    return res.json({ status: "Pending"});
})
.delete((req, res)=>{
    //Delete user with the given id
    return res.json({ status: "Pending"});
}); 


//to create a new user
app.post("/api/users", (req, res) =>{
    const body = req.body;
/*
using postman to test the post request
console.log("Body:", body);
body is carrying the new object that we are defining via postman
We can add this to our existing database - MOCK_DATA.JSON*/
users.push({ ...body, id: users.length+1});
fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) =>{
    return res.json({status: "success", id: users.length});
}
)
});

//using postman for testing the routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});