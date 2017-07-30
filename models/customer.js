module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customer", {
    customer_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Customer.associate = function(models) {
    Customer.hasOne(models.burger);
  }

  return Customer;
};