module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("customer", {
    customer_name: DataTypes.STRING
  });

  Customer.associate = function(models) {
    Customer.hasOne(models.burger, {
      onDelete: "cascade"
    });
  };

  return Customer;
};