"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    const oidc = app.locals.oidc;
    // define a route handler for the default home page
    app.get('/', (req, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        // tslint:disable-next-line:no-console
        console.log(`GET / > The authenticated user:${user}`);
        res.render('index', { isAuthenticated: req.isAuthenticated(), user });
    });
    // define a secure handler route for the login page that redirects to /inventory
    app.get('/login', oidc.ensureAuthenticated(), (req, res) => {
        res.redirect('/inventory');
    });
    // define route to handle logout
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });
    // define a secure route handler for the inventory page
    app.get('/inventory', oidc.ensureAuthenticated(), (req, res) => {
        const user = req.userContext ? req.userContext.userinfo : null;
        // tslint:disable-next-line:no-console
        console.log(`GET /inventory > The authenticated user:${user}`);
        res.render('inventory', { isAuthenticated: req.isAuthenticated(), user });
    });
};
exports.register = register;
//# sourceMappingURL=index.js.map