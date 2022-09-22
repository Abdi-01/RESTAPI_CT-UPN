module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  users.associate = function(models){
    // Assocations define here
    users.hasMany(models.useraddress, {
      foreignKey: 'userId'
    })

    users.hasMany(models.carts, {
      foreignKey: 'userId'
    })
  }
  return users
}