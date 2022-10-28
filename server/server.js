const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const db = require('./config/connection');
const routes = require('./routes')
const port = process.env.APP_PORT||3001;

const app = express();


app.use(cors({ credentials: true }))
app.use(express.urlencoded({extended:true}));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../client/build')));
}
app.use(routes)
app.get('*',(req, res)=>{
    res.sendfile(path.resolve(__dirname, '../client/build/index.html'))
})
db.once('open',()=>{
    app.listen(port,()=>{
        console.log(`API server running on port : ${port}`);
    })
})