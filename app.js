const http = require('http');

const express = require('express');

const app = express();

app.use((req , res , next) => {
    console.log("in the middleware");
    next();
});

app.use((req , res , next) => {
    console.log("in the middleware");
    res.send('<h1> hello from express </h1>')
});
 
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
