const express = require('express');
const cors = require('cors');
const path = require('path');

const apiRouter = require('./api');
const app = express();

const { ServerErrorHandler, BoomErrorsHandler } = require('./middlewares/errors');

app.use(express.urlencoded({ extended: false }))
app.use(express.json());
app.use(cors());

apiRouter(app);

app.use(BoomErrorsHandler);
app.use(ServerErrorHandler);

app.listen(3000, () => {
    console.log('App running at port 3000');
});

