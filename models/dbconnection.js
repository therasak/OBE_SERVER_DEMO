// const {Sequelize} = require('sequelize');

// const sequelize_conn = new Sequelize('obe2', 'root', 'Therasak.9025', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: false,
//     pool: {
//         max: 10,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// })

// module.exports = sequelize_conn;
const {Sequelize} = require('sequelize');

const sequelize_conn = new Sequelize(process.env.MYSQL_PUBLIC_URL, {
    dialect: 'mysql',
    logging: false,
})

module.exports = sequelize_conn;