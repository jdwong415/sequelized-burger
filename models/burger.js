module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    burger_name: DataTypes.STRING,
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    Burger.belongsTo(models.customer, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  
  return Burger;
};