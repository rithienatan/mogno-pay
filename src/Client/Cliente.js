/**
 * Create client person
 * 
 * @class
 */
export default class Cliente {
    #cpf;
    #nome;
    #senha;
    #email;

    /**
     * Default client constructor
     * 
     * @constructor
     * @param {string} cpf 
     * @param {string} nome 
     * @param {string} senha
     * @param {string} email 
     */
    constructor(cpf, nome, senha, email) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#senha = senha;
        this.#email = email;
    }//end constructor()

    //---------- get(s) and set(s) ----------
    getCpf() { return (this.#cpf); }
    setCpf(cpf) { this.#cpf = cpf; }

    getNome() { return (this.#nome); }
    setNome(nome) { this.#nome = nome; }

    getEmail() { return (this.#email); }
    setEmail(email) { this.#email = email; }

    getSenha() { return(this.#senha); }
    setSenha(senha) { this.#senha = senha; }
}//end class