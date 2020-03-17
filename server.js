const express = require('express');

const app = express();

const PORT = process.env.PORT || 80;

app.use(express.static(__dirname + '/public'));

app.listen(PORT);
