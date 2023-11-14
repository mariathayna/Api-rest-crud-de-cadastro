import { Sequelize } from "sequelize"; 

const dbName = process.env.DB_NAME; 
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize( dbName, dbUser, dbPassword, {
  host: 'localhost',
  dialect: 'mysql',
});

sequelize.sync().then(() => {
      console.log('DB connected')
    });
  

module.exports = sequelize;
