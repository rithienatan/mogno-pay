//---------- imports ----------
const { Client } = require('pg');

//---------- custom imports ----------
const connectPostgres = require('./Connect');
const RNG = require('../aux-functions/GenerateRandomNumber');
const Hash = require('../aux-functions/GenerateHash');

//---------- functions ----------
/**
 * Insert user to database
 * 
 * @param {object} user - User infos
 */
function InsertUser(user)
{
    const client = new Client(connectPostgres);

    client.connect();

    const querie = `INSERT INTO CARTEIRA(nome, numero, validade, cvv, cardtype, carteirahash)
	    VALUES ('${user.nome}', ${RNG(10000000, 99999999)}, '2028-04-01', ${RNG(100, 999)}, 'Crédito', '${Hash(user.nome)}');

    INSERT INTO CLIENTE(nome, cpf, senha, email) 
	    VALUES ('${user.nome}', '${user.cpf}', '${user.senha}', '${user.email}');`;

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
    const client = new Client(connectPostgres);

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


    if(user.senha !== object.cliente.senha)
    { client.end(); return null; }
    else
    {
        // executa a segunda query
        const querie_II = `SELECT * FROM CARTEIRA WHERE id_cliente = ${object.cliente.id_cliente};`;

        await client
            .query(querie_II)
            .then(res => { const temp = res.rows[0]; object.carteira = temp; })
            .catch(e => { console.log(e); client.end(); return(null); });

        client.end();    
    }//end if

    return(object);
}//end FindUserByEmail()

//---------- exports ---------
module.exports = {
    InsertUser,
    SearchUser
};