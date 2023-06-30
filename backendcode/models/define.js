const Sequelize = require('sequelize');
const sequelize = require('../util/database');

//sequelize method will automatically create table,column in database if does not exist
//create obj called user and table name of sequelizer is "tables"

const user = sequelize.define('tables',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,   //A primary key is used to ensure data in the specific column is unique.A foreign key is a column or group of columns in a relational database table that provides a link between data in two tables
        allowNull:false,
        autoIncrement:true
    },
    price:{
        type:Sequelize.INTEGER,
        allowNull:false
    },
    dish:{
        type:Sequelize.STRING,
        allowNull:false
    },
    table:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

const createTable = async ()=>{
    try{
        // Create the User table if it doesn't exist with force: true option
        //if table does not exist then force:true inside user.sync({force:true})
        await user.sync(); 
        console.log('table called tables created succesfully in database');
    } catch(error){
        console.log('error while creating table called tables',error);
    }
}
createTable();

module.exports = user;
