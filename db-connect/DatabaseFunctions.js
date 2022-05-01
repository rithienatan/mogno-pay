//---------- imports ----------
const { Client } = require('pg');

//---------- custom imports ----------
const { connectPostgres } = require('./Connect');

//---------- configs ---------
const client = new Client(connectPostgres);

//---------- functions ----------


//---------- exports ---------
client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
})