module.exports = (sequelize, DataTypes) => {
  const useraddress = sequelize.define('useraddress', {
    consignee: DataTypes.STRING,
    address: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});

  useraddress.associate = function(models){
    useraddress.belongsTo(models.users, {
      foreignKey: 'userId'
    })
  }

  return useraddress
}