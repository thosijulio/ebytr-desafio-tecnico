const connection = require('../connection');

const create = async (task) => {
  try {
    await (await connection()).collection('tasksItens').insertOne(task)
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = create;
