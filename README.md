# node-rest-api
building a REST API - which supports JSON

This API supports the following routes

GET /users - HTML Document Render
GET /api/users - List all users JSON
![Image Title](public/1.png)

GET /user/1 - Get the user with ID=1
GET /user/2 - Get the user with ID=2
so, the basic syntax will be : 
GET /user/:id - to get user with any required id
:id means variable | Dynamic
This called Dynamic Path Parameter
![Image](public/id.png) 

POST /users - Create new user
![Img](public/2.png)
![Img](public/3.png)

PATCH /users/1 - Edit the user with ID 1

DELETE /users/1 - Delete the User with ID 1
