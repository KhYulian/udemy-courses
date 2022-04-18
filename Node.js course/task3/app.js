const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const globalErrorHandler = require('./controllers/errorController');

const usersRouter = require('./routes/usersRoutes');
const trucksRouter = require('./routes/trucksRoutes');
const loadsRouter = require('./routes/loadsRoutes');
const authRouter = require('./routes/authRoutes');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api/users/me', usersRouter);
app.use('/api/trucks', trucksRouter);
app.use('/api/loads', loadsRouter);
app.use('/api/auth', authRouter);

app.use(globalErrorHandler);

module.exports = app;
