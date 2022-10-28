const mongoose = require('mongoose');
require('dotenv').config()
const db_port = process.env.DB_PORT||27017;
const db_name = process.env.DB_NAME;
const db_url = process.env.DB_URL;
const connectionString = `mongodb://${db_url}:${db_port}/${db_name}`;

mongoose.connect(connectionString,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

module.exports = mongoose.connection;