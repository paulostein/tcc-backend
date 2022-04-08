const express = require('express');
const { Router } = require('express');
const { readdirSync } = require('fs');
const { resolve } = require('path');
const { errors } = require('celebrate');
const bodyParser = require('./middlewares/body-parser');
const cors = require('./middlewares/cors');
const contentType = require('./middlewares/content-type');
const tokenVerifier = require('./middlewares/token-verifier');
const fileUpload = require('express-fileupload');

const initRouter = (app) => {
    const router = Router();
    app.use('/api', router);
    return router;
};

const initMiddlewares = (app) => {
    app.use(bodyParser());
    app.use(cors());
    app.use(contentType);
    app.use(tokenVerifier);
    app.use(fileUpload());
};

const initRoutes = (router) => {
    const pathToRequire = resolve(__dirname, 'routes');
    const routesFiles = readdirSync(pathToRequire);
    routesFiles.map((routeFile) =>
        require(`${pathToRequire}/${routeFile}`)(router)
    );
};

const app = express();
initMiddlewares(app);

const router = initRouter(app);
initRoutes(router);

app.use(errors());

app.listen(3001, () => console.log('running at 3001'));
