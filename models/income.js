const Sequelize = require('sequelize')
const sequelize = require('./index')

const IncomeModel = sequelize.define("income",{
    income : {
        type:Sequelize.STRING,
        allowNull: false
    },
    amount : {
        type:Sequelize.INTEGER,
        allowNull: false
    },

})

module.exports = IncomeModel