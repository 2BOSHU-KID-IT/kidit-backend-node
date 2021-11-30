const sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define("user", {
        email: {
            type: DataTypes.STRING(),
            allowNull: false,
            unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(20),
            allowNull: false,
        }
    })
}