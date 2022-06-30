const express = require('express');
const routes = require('./routes');

const app = express();
const port = process.env.PORT || 8000;
app.use(routes);
app.listen(port, () => console.log(`Server started on ${port}`));

module.exports = app;

