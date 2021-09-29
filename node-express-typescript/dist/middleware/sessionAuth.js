"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const oidc_middleware_1 = require("@okta/oidc-middleware");
const express_session_1 = __importDefault(require("express-session"));
const register = (app) => {
    // Create the OIDC client
    const oidc = new oidc_middleware_1.ExpressOIDC({
        appBaseUrl: process.env.HOST_URL,
        client_id: process.env.OKTA_CLIENT_ID,
        client_secret: process.env.OKTA_CLIENT_SECRET,
        issuer: `${process.env.OKTA_ORG_URL}/oauth2/default`,
        redirect_uri: `${process.env.HOST_URL}/authorization-code/callback`,
        scope: 'openid profile'
    });
    // Configure Express to use authentication sessions
    app.use((0, express_session_1.default)({
        resave: true,
        saveUninitialized: false,
        secret: process.env.SESSION_SECRET
    }));
    // Configure Express to use the OIDC client router
    app.use(oidc.router);
    // add the OIDC client to the app.locals
    app.locals.oidc = oidc;
};
exports.register = register;
//# sourceMappingURL=sessionAuth.js.map