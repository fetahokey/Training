"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const pg_promise_1 = __importDefault(require("pg-promise"));
const register = (app) => {
    const oidc = app.locals.oidc;
    const port = parseInt(process.env.PGPORT || '5433', 10);
    const config = {
        database: process.env.PGDATABASE || 'postgres',
        host: process.env.PGHOST || 'localhost',
        port,
        user: process.env.PGUSER
    };
    const pgp = (0, pg_promise_1.default)();
    const db = pgp(config);
    // define the API routes
    // GET api/inventories/all
    app.get('/api/inventories/all', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.userContext.userinfo.sub;
            const inventories = yield db.any(`
                SELECT
                    id,
                    brand,
                    model,
                    year,
                    color
                FROM inventory
                WHERE user_id= $[userId]
                ORDER BY year, brand, model
            `, { userId });
            return res.json(inventories);
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
    // GET api/inventories/total
    // get total items in the stock
    app.get('/api/inventories/total', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.userContext.userinfo.sub;
            const total = yield db.one(`
                SELECT count(*) AS total
                FROM inventory
                WHERE user_id = $[userId]
            `, { userId }, (data) => {
                return { total: +data.total };
            });
            return res.json(total);
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
    // GET api/inventories/
    // find item by brand OR model
    app.get('/api/inventories/find/:search', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.userContext.userinfo.sub;
            const inventories = yield db.any(`
                SELECT
                    id,
                    brand,
                    model,
                    year,
                    color
                FROM inventory
                WHERE user_id = $[userId]
                AND (brand LIKE $[search] OR model LIKE $[search])

            `, { userId, search: `%${req.params.search}%` });
            return res.json(inventories);
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
    // POST api/inventories/add
    app.post('/api/inventories/add', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // tslint:disable-next-line:no-console
            console.log(`this is /api/inventories/add req.bode ${req.body}`);
            const userId = req.userContext.userinfo.sub;
            const id = yield db.one(`
                INSERT INTO inventory (user_id, brand, model, year, color)
                VALUES ($[userId], $[brand], $[model], $[year], $[color])
                RETURNING id;
            `, Object.assign({ userId }, req.body));
            return res.json({ id });
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
    // api/inventories/update
    app.post('api/inventories/update', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.userContext.userinfo.sub;
            const id = yield db.one(`
                UPDATE inventory
                SET brand = $[brand]
                    , model = $[model]
                    , year = $[year]
                    , color = $[color]
                WHERE
                    id = $[id]
                    AND
                    user_id = $[userId]
                RETRUNING id;
            `, Object.assign({ userId }, req.body));
            return res.json({ id });
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
    // api/inventories/remove
    app.delete('/api/inventories/remove/:id', oidc.ensureAuthenticated(), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const userId = req.userContext.userinfo.sub;
            const id = yield db.result(`
                DELETE
                FROM inventory
                WHERE user_id = $[userId]
                AND id = $[id]
            `, { userId, id: req.params.id }, (r) => r.rowCount);
        }
        catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({ error: error.message || error });
        }
    }));
};
exports.register = register;
//# sourceMappingURL=api.js.map