const mongoose = require('mongoose');
require('dotenv').config()
const isProduction = process.env.NODE_ENV === 'production';
const db_port = isProduction ? process.env.DB_PORT:(process.env.DB_DEV_PORT||27017);
const db_name = isProduction ? process.env.DB_NAME:process.env.DB_DEV_NAME;
const db_url = isProduction ? process.env.DB_URL:process.env.DB_DEV_URL;;
const db_user = process.env.DB_USER;
const db_password = process.env.DB_PASSWORD;

var connectionString = `mongodb://${db_url}:${db_port}/feedback`;
if(process.env.NODE_ENV === 'production'){
    connectionString = `mongodb+srv://${db_user}:${db_password}@${db_name}/?retryWrites=true&w=majority`
}

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports = mongoose.connection;