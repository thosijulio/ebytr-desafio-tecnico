const express = require('express');
const { taskItens } = require('../../services/index');
const taskRouter = express.Router({ mergeParams: true });

taskRouter.get('/', async (req, res) => {
  const tasks = await taskItens.findAll();
  res.send(tasks);
});

taskRouter.post('/', async (req, res) => {
  const task = req.body;

  const isTaskCreate = await taskItens.create(task);

  if (isTaskCreate) res.json(await taskItens.findAll());
  else res.json({ error: true });
});

module.exports = taskRouter;
