module.exports = (sequelize, DataTypes) => {
  const carts = sequelize.define('carts', {
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});

  carts.associate = function(models){
    // Assocations define here
    carts.belongsTo(models.users, {
      foreignKey: 'userId'
    })

    carts.belongsTo(models.products, {
      foreignKey: 'productId'
    })
  }

  return carts
}