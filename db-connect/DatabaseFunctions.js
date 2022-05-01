//---------- imports ----------
const { Client } = require('pg');

//---------- custom imports ----------
const connectPostgres = require('./Connect');
const RNG = require('../aux-functions/GenerateRandomNumber');

//---------- configs ---------
const client = new Client(connectPostgres);

//---------- functions ----------
/**
 * Insert user to database
 * 
 * @param {object} user - User infos
 */
function InsertUser(user)
{
    client.connect();

    const querie = `INSERT INTO CARTEIRA(nome, numero, validade, cvv, cardtype, carteirahash)
	    VALUES ('Sami', ${RNG(1000000000000000, 9999999999999999)}, '2028-04-01', ${RNG(100, 999)}, 'Crédito', 'asfgrsghrsgarf94sg6r81ga6');

    INSERT INTO CLIENTE(nome, cpf, senha, email) 
	    VALUES ('Sami', '787.877.877-88', 'ni', 'nin@email.com');`;

    client.query(querie, (err, res) => {
        console.log(err, res)
        client.end()
    });
}//end InsertUser()

/**
 * Search user from database
 * 
 * @param {object} user - JSON with email and password
 */
async function SearchUser(user)
{
    let object = {
        "cliente": null,
        "carteira": null
    };

    // executa a primeira query
    client.connect();
    const querie_I = `SELECT * FROM CLIENTE WHERE email = '${user.email}';`;

    await client
        .query(querie_I)
        .then(res => { const temp = res.rows[0]; object.cliente = temp; })
        .catch(e => { console.log(e); client.end(); return(null); });

    // executa a segunda query
    const querie_II = `SELECT * FROM CARTEIRA WHERE id_cliente = 1;`;

    await client
        .query(querie_II)
        .then(res => { const temp = res.rows[0]; object.carteira = temp; })
        .catch(e => { console.log(e); client.end(); return(null); });

    client.end();    

    return(object);
}//end FindUserByEmail()

async function print()
{ console.log(await SearchUser("as")); }

console.log(print());

//---------- exports ---------
module.exports = {
    InsertUser,
    SearchUser
};