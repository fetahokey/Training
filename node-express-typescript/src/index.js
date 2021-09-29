const express =  require("express");
const app = express();
const port = 8080;

// define a route handler for the default home page

app.get('/', (req, res)=>{
    res.send('Hello World');
});


// start the Express server 

app.listen(port, ()=>{
    console.log(`Server started at http://localhost:${ port }`);
});