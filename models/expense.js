const DataTypes = require('sequelize')
const sequelize = require('./index')

const expenseModel = sequelize.define("expense",{
    expense : {
        type:DataTypes.STRING,
        allowNull: false
    },
    amount : {
        type:DataTypes.INTEGER,
        allowNull: false
    },

})

module.exports = expenseModel