const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const authRoute = require('./routes/auth.route');

const { httpLogStream } = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(morgan('combined', { stream: httpLogStream }));
app.use(cors());

app.use('/api', authRoute);

app.get('/', (req, res) => {
    res.status(200).send({
        status: "success",
        data: {
            message: "You should not be here but for your information the API is working fine!",
            code: 200
        }
    });
});

app.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        status: "error",
        message: `Man, there was an error, you can check what its saying: ${err.message}`,
        code: err.statusCode || 500
    });
    next();
});

module.exports = app;