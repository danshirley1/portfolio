require('@babel/register');

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { createError } = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const schema = require('./graphql/schema').default;
const indexRouter = require('./routes/index');
const spotifyRouter = require('./routes/spotify/index');

// GRAPHQL SERVER
const apolloServer = new ApolloServer({
  schema,
  formatError: err => ({
    ...err,
    name: err.extensions.exception.name,
  }),
});

const app = express();

apolloServer.applyMiddleware({ app });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5000'],
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/spotify/', spotifyRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => { next(createError(404)); });

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = { app, apolloServer };
