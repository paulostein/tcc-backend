const express = require('express');
const { json, Router } = require('express');
const { readdirSync } = require('fs');
const { resolve } = require('path');

const initRouter = (app) => {
    const router = Router();
    app.use('/api', router);
    return router;
};

const initMiddlewares = (app) => {
    app.use(json());
    app.use((req, res, next) => {
        res.type('json');
        next();
    });
};

const initRoutes = (router) => {
    const pathToRequire = resolve(__dirname, '..', 'presentation');
    const routesFiles = readdirSync(pathToRequire);
    routesFiles.map((routeFile) => require(`${pathToRequire}/${routeFile}`)(router));
};

const app = express();
initMiddlewares(app);

const router = initRouter(app);
initRoutes(router);

app.listen(3001, () => console.log('running at 3001'));
