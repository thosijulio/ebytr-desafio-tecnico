const express = require('express');
const taskRouter = require('./taskItens');

const mainRouter = express.Router({ mergeParams: true });

mainRouter.use('/tasks', taskRouter);

module.exports = mainRouter;

