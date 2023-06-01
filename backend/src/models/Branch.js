/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "branch",
    {
      branchId: {
        autoIncrement: true,
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        field: "BranchId",
      },
      name: {
        type: DataTypes.CHAR(50),
        allowNull: true,
        field: "Name",
      },
      address: {
        type: DataTypes.CHAR(50),
        allowNull: true,
        field: "Address",
      },
      phone: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: "Phone",
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "CreatedAt",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        field: "UpdatedAt",
      },
    },
    {
      sequelize,
      tableName: "branch",
    }
  );
};
