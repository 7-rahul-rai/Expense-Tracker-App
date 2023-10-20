const {Sequelize,DataTypes} = require('sequelize');

const sequelize = new Sequelize('newexpense','root','12345',{
    host:'localhost',
    dialect:'mysql'
})

try{
   sequelize.authenticate()
   console.log('connection is successfully established')
}catch(e){
    console.log(e)
}

// var db = {};
// db.sequelize = sequelize
// db.Sequelize = Sequelize

//db.sequelize.sync({force:true});

// db.income = require('./income')(sequelize,DataTypes)
//db.expense = require('./expense')(sequelize,DataTypes)

module.exports = sequelize