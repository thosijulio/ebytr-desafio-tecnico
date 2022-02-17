const model = require('../../models');

const findAll = async () => {
  const result = await model.taskItens.findAll();
  return result;
};

module.exports = findAll;
