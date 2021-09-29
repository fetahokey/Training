import {ExpressOIDC} from '@okta/oidc-middleware';
import express from 'express';
import session from 'express-session';

export const register = (app:  express.Application) =>{



    // Create the OIDC client
    const oidc = new ExpressOIDC({
        appBaseUrl: process.env.HOST_URL,
        client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        issuer: `${ process.env.OKTA_ORG_URL }/oauth2/default`,
        redirect_uri: `${ process.env.HOST_URL }/authorization-code/callback`,
        scope: 'openid profile'
    });

    // Configure Express to use authentication sessions
    app.use(session({
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    }));

    // Configure Express to use the OIDC client router
    app.use(oidc.router);

    // add the OIDC client to the app.locals
    app.locals.oidc = oidc;

}
