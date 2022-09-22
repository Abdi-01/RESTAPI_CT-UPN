module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, {});

  products.associate = function(models){
    // Assocations define here
    products.hasMany(models.carts, {
      foreignKey: 'productId'
    })
  }
  return products
}