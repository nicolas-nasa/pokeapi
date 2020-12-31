const express = require ('express');
var cors = require('cors');



const app =  express();
app.use(express.json());

app.use(cors());

app.use('/', require("./src/routs"));


app.listen(3001);