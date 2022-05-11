const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT ||8000;
const hbs = require('hbs');

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views')
const partials_path = path.join(__dirname, '../templates/partials');
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
app.use(express.static(static_path));

 
app.get("/", (req, res) => {
    res.render("index")
});
app.get("/wether", (req, res) => {
    res.render('about')
});
app.get("/about", (req, res) => {
    res.render("Wether page")
});
app.get("*", (req, res) => {
    res.render("404 error page",{
    errorMsg: "opps page not found"
    })
});
app.listen(port, ()=>{
    console.log("ewfwpoefjowj")
})

//npm || nodemon src/app.js -e js,hbs 