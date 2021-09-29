import express from 'express';
import path from 'path';
const app = express();
const port = 8080;

// configure Express to use EJS

app.use(express.static( path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// define a route handler for the default home page
app.get('/', (req, res)=>{
    // render the index template
    res.render('index');
});


// start the Express server
app.listen(port, ()=>{
    // tslint:disable-next-line:no-console
    console.log(`Server started at http://localhost:${ port }`);
});