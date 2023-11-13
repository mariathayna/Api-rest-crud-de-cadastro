const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('DB_NAME', 'DB_USER', 'DB_PASSWORD', {
  host: 'localhost',
  dialect: 'mysql',
});


module.exports = sequelize;

 
 
//  const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// });

// connection.connect((error)=>{
//     if(error) throw error;
//     console.log(`conectado ao banco de dados: ${process.env.DB_NAME}`)
// });

// module.exports = connection;


