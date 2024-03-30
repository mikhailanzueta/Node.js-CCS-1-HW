// REQUIRE EXPRESS
const express = require('express');
// CREATE APP
const app = express();
// CREATE A PORT NUMBER
const PORT = 3000;
// REQUIRE MORGAN AS MIDDLEWARE
const morgan = require('morgan')

// create 5 'GET' routes
app.get("/", (request, response, next) => {
    //response.send("This route points to the Home page")
    //REFACTOR
    response.status(200).json({success: {message: "Index page was successful!"}})
})
app.get("/about", (request, response, next) => {
    //response.send("This route points to the About page")
    //REFACTOR
    response.status(200).json({success: {message: "About page was successful!"}})
})
app.get("/admin", (request, response, next) => {
    //response.send("This route points to the Admin Console page")
    //REFACTOR
    response.status(200).json({success: {message: "Admin page was successful!"}})
})
app.get("/login", (request, response, next) => {
    //response.send("This route points to the Login page")
    //REFACTOR
    response.status(200).json({success: {message: "Login page was successful!"}})
})
app.get("/admin/create-book", (request, response, next) => {
    //response.send("This route points to the Create Book page")
    //REFACTOR
    response.status(200).json({success: {message: "Create-book page was successful!"}})
})


// CREATE SERVER
app.listen(PORT, ()=>{
    console.log(`The server is listening on port ${PORT}!`)
    console.log(`http://localhost:${PORT}/`);
})