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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});