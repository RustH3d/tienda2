const { Router } = require('express');
const router = Router();

const userRouter = require('./components/User/route');
const productRouter = require('./components/Product/route');

const apiRouter = (app) => {
    app.use('/', router);
    router.use('/user', userRouter);
    router.use('/product', productRouter);
}



module.exports = apiRouter;