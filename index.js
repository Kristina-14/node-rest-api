const express = require('express');
const users = require('./MOCK_DATA.json')

const app = express();
const PORT = 8000;

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
app.get("/api/users/:userId", (req, res) =>{
    const userId = Number(req.params.userId);
    const user = users.find( (user) => user.id === userId);
    return res.json(user);
}); 

app.post("/api/users", (req, res) =>{
//to create a new user
    return res.json({status:"pending"})
});

app.patch("/api/users", (req, res) =>{
//to edit the user with id
    return res.json({status:"pending"})
});

app.delete("/api/users", (req, res) =>{
//to delete the user with id
    return res.json({status:"pending"})
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});