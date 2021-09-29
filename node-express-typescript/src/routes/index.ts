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