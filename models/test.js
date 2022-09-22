module.exports = (sequelize, DataTypes) => {
  const test = sequelize.define('test', {
    name: DataTypes.STRING
  }, {
    schema: 'ref',
  });

  return test
}