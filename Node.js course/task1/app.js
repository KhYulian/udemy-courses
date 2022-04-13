const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const fileRouter = require('./routes/fileRoutes');
const globalErrorHandler = require('./controllers/errorController');

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/api/files', fileRouter);

app.use(globalErrorHandler);

module.exports = app;
