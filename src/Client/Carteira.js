/**
 * Creates Carteira for a client
 * 
 * @class
 */
class Carteira
{
    #nome;
    #numero;
    #validade;
    #cvv;
    #cardType;
    #carteiraHash;

    /**
     * Default constructor carteira
     * 
     * @constructor
     * @param {string} nome 
     * @param {number} numero 
     * @param {Date} validade 
     * @param {number} cvv 
     * @param {string} carteiraHash 
     */
    constructor(nome, numero, validade, cvv, carteiraHash)
    {
        this.#nome = nome;
        this.#numero = numero;
        this.#validade = validade;
        this.#cvv = cvv;
        this.#cardType = "Crédito";
        this.#carteiraHash = carteiraHash;
    }//end constructor()

    //---------- get(s) and set(s) ----------
    getNome()
    { return(this.#nome); }
    setNome(nome)
    { this.#nome = nome; }

    getNumero()
    { return(this.#numero); }
    setNumero(numero)
    { this.#numero = numero; }

    getValidade()
    { return(this.#validade); }
    setValidade(validade)
    { this.#validade = validade; }

    getCvv()
    { return(this.#cvv); }
    setCvv(cvv)
    { this.#cvv = cvv; }

    getCardType()
    { return(this.#cardType); }
    setCardType(cardType)
    { this.#cardType = cardType; }

    getCarteiraHash()
    { return(this.#carteiraHash); }
    setCarteiraHash(carteiraHash)
    { this.#carteiraHash = carteiraHash; }
}//end class