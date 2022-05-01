/**
 * Create client person
 * 
 * @class
 */
class Cliente
{
    #cpf;
    #nome;
    #email;

    /**
     * Default client constructor
     * 
     * @constructor
     * @param {string} cpf 
     * @param {string} nome 
     * @param {string} email 
     */
    constructor(cpf, nome, email)
    {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#email = email;
    }//end constructor()

    //---------- get(s) and set(s) ----------
    getCpf()
    { return(this.#cpf); }
    setCpf(cpf)
    { this.#cpf = cpf; }

    getNome()
    { return(this.#nome); }
    setNome(nome)
    { this.#nome = nome; }

    getEmail()
    { return(this.#email); }
    setEmail(email)
    { this.#email = email; }
}//end class