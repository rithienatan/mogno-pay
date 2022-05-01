//---------- imports ---------
require('dotenv').config({ path:'../.env' });

//---------- Object ---------
const connectPostgres = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
};

//---------- exports ---------
module.exports = connectPostgres;