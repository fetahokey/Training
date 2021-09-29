import * as express from 'express';
import pgPromise from 'pg-promise';

export const register = (app:express.Application) =>{
    const oidc = app.locals.oidc;
    const port = parseInt(process.env.PGPORT || '5433', 10);
    
    const config = {
        database: process.env.PGDATABASE || 'postgres',
        host: process.env.PGHOST || 'localhost',
        port,
        user: process.env.PGUSER
    };

    const pgp = pgPromise();
    const db = pgp( config );

    // define the API routes
    // GET api/inventories/all
    app.get('/api/inventories/all', oidc.ensureAuthenticated(), async(req:any, res)=>{
        try {
            const userId = req.userContext.userinfo.sub;
            const inventories = await db.any(`
                SELECT
                    id,
                    brand,
                    model,
                    year,
                    color
                FROM inventory
                WHERE user_id= $[userId]
                ORDER BY year, brand, model
            `, {userId});

            return res.json(inventories);
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error: error.message || error});
            
        }
    });

    // GET api/inventories/total 
    // get total items in the stock
    app.get('/api/inventories/total', oidc.ensureAuthenticated(), async (req:any, res)=>{
        try {
            const userId = req.userContext.userinfo.sub;
            const total = await db.one(`
                SELECT count(*) AS total
                FROM inventory
                WHERE user_id = $[userId]
            `, {userId}, ( data: {total:number} )=>{
                return {total: +data.total};
            });
            return res.json( total );

        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error:error.message || error})
        }
    });

    // GET api/inventories/
    // find item by brand OR model
    app.get('/api/inventories/find/:search', oidc.ensureAuthenticated(), async (req:any, res)=>{
        try {
            const userId =  req.userContext.userinfo.sub;
            const inventories = await db.any(`
                SELECT
                    id,
                    brand,
                    model,
                    year,
                    color
                FROM inventory
                WHERE user_id = $[userId]
                AND (brand LIKE $[search] OR model LIKE $[search])

            `, {userId, search: `%${ req.params.search }%`});
            return res.json(inventories);

        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error:error.message || error})
        }
    });

    // POST api/inventories/add
    app.post('/api/inventories/add', oidc.ensureAuthenticated(), async (req: any, res)=>{
        try {
            const userId =  req.userContext.userinfo.sub;
            const id =  await db.one(`
                INSERT INTO inventory (user_id, brand, model, year, color)
                VALUES ($[userId], $[brand], $[model], $[year], $[color])
                RETURNING id;
            `, {userId, ...req.body});
            return res.json({id});
        } catch (error) {
             // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error:error.message || error})
        }
    });

    // api/inventories/update
    app.post('api/inventories/update', oidc.ensureAuthenticated(), async (req:any, res)=>{
        try {
            const userId =  req.userContext.userinfo.sub;
            const id =  await db.one(`
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
            `, {userId, ...req.body});

            return res.json({id});

        }catch (error){
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error:error.message || error})
        }

    });

    // api/inventories/remove
    app.delete('/api/inventories/remove/:id', oidc.ensureAuthenticated(), async (req:any, res)=>{
        try {
            const userId =  req.userContext.userinfo.sub;
            const id = await db.result(`
                DELETE
                FROM inventory
                WHERE user_id = $[userId]
                AND id = $[id]
            `, {userId, id: req.params.id}, (r)=> r.rowCount);
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error);
            res.json({error:error.message || error})
        }
    });

}
