/*
import * as express from 'express';

export const register = ( app: express.Application) => {
    const oidc = app.locals.oidc;

    // define a route handler for the default home
    app.get('/', (req:any, res)=>{
        res.render('index');
    });

    // define a secure route handler for the login page thar redirect to /inventory
    app.get('/login', oidc.ensureAuthenticated(), (req,res)=>{
        res.redirect('/inventory');
    })

    // define a route to handle a logout
    app.get('/logout', (req:any,res)=>{
        req.logout();
        res.redirect('/');
    });

    // define a secure route handler for the inventory page
    app.get('/inventory', oidc.ensureAuthenticated(), (req:any,res)=>{
        res.render('inventory');
    })
}
*/
import * as express from 'express';

export const register = (app: express.Application) =>{
    const oidc = app.locals.oidc;

    // define a route handler for the default home page
    app.get('/', (req:any, res)=>{
        const user = req.userContext ? req.userContext.userinfo : null;
         // tslint:disable-next-line:no-console
        console.log(`GET / > The authenticated user:${ user }`);

        res.render('index', {isAuthenticated: req.isAuthenticated(), user});
    });

    // define a secure handler route for the login page that redirects to /inventory
    app.get('/login', oidc.ensureAuthenticated(), (req,res)=>{
        res.redirect('/inventory');
    });

    // define route to handle logout
    app.get('/logout', (req:any, res)=>{
        req.logout();
        res.redirect('/');
    });

    // define a secure route handler for the inventory page
    app.get('/inventory',oidc.ensureAuthenticated() ,(req:any, res)=>{
        const user = req.userContext ? req.userContext.userinfo: null;
         // tslint:disable-next-line:no-console
         console.log(`GET /inventory > The authenticated user:${ user }`);

        res.render('inventory', {isAuthenticated: req.isAuthenticated(), user});
    })
}