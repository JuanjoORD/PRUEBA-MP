const Sequelize = require('sequelize')

/*const sequelize = new Sequelize('calzadaDbDesarrollo', 'root', 'celestukix2', {
    host: '35.227.59.148',
    dialect: 'mysql'
});*/


const sequelize = new Sequelize('pruebamp', 'devuser', 'devuser', {
   host: 'localhost',
   dialect: 'mysql',
   port: 3306
});

const branchModel = require('../models/Branch');
//invocación al modelo que tiene la estructura de la tabla.
const Branch = branchModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log('Sync done!!')
}).catch(err => console.log(err));



module.exports = {
    Branch
}
