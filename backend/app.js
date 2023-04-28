require('dotenv').config();
const express = require('express');
const path = require('path');
const serverConfig = require('./config/serverConfig');

const app = express();

const PORT = process.env.PORT || 4000;

const apiRouter = require('./api/api.routes');
const apiAuthRouter = require('./api/api.auth.routes');
const authRouter = require('./routes/auth.routes');

serverConfig(app);
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/api', apiRouter);
app.use('/api/auth', apiAuthRouter);
app.use('/auth', authRouter);

app.get('*', (req, res) => {
  res.sendFile(path.resolve('../frontend/build/index.html'));
});

app.listen(PORT, () => {
  console.log(`Шуршим на ${PORT} порту`);
});
