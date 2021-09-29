

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import * as sessionAuth from './middleware/sessionAuth';
import * as routes from './routes';

// intitialize configuration
dotenv.config();

// port now is available to Node.js runtime
// as if it where an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// configure express to parse JSON data

// configure Express to use EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// configure Express to serve static files in the public folder
app.use( express.static( path.join(__dirname, 'public' ) ) );

// configure session auth
sessionAuth.register(app);

// configure routes
routes.register(app);


// start the express server
app.listen(port, ()=> {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${ port }`);
})
