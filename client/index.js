const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
}));
app.use(passport.initialize());
app.use(passport.session());
// authRoutes(app);
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server listening on port ', PORT);
});

// mongodb://<dbuser>:<dbpassword>@ds151554.mlab.com:51554/emaily-dev-gautam
