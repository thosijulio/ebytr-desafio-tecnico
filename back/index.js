const express = require('express');
const cors = require('cors');
const mainRouter = require('./controllers');

require('dotenv').config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(cors())

app.use('/', mainRouter);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));
