"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    const oidc = app.locals.oidc;
    // define a route handler for the default home
    app.get('/', (req, res) => {
        // tslint:disable-next-line:no-console
        console.log(`Is here !! `);
        res.render('index');
    });
    // define a secure route handler for the login page thar redirect to /inventory
    app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
        res.redirect('/inventory');
    });
    // define a route to handle a logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    // define a secure route handler for the inventory page
    app.get('/inventory', oidc.ensureAuthenticated(), (req, res) => {
        // tslint:disable-next-line:no-console
        console.log(`Is here !! `);
        res.render('inventory');
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map