const connection = require('../connection');

const findAll = async () => {
  const data = await (await connection()).collection('tasksItens').find().toArray();
  return data;
};

module.exports = findAll;
