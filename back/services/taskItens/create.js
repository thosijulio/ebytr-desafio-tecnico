const model = require('../../models');

const create = async (task) => {
  const result = await model.taskItens.create(task);
  return result;
};

module.exports = create;
