const express = require ("express");
const app = express();
const path = require("path");
const hbs = require("hbs")
const port = process.env.PORT || 5000 ;
require("./db/conn");

const static_path = path.join(__dirname,"../css");
const template_path = path.join(__dirname,"../js");
const partial_path = path.join(__dirname,"../js");
app.use(express.static(static_path));
app.set("view engine","hbs");
app.set("views",template_path);
hbs.registerPartials(partial_path);

app.get('/',(req,res)=>{
    res.render("index");
});

app.listen(port,()=>{
    console.log(`connection established succesfully at port ${port}`);
})