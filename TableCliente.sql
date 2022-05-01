CREATE TABLE Cliente(
	id_cliente serial PRIMARY KEY NOT NULL, 
	nome varchar(50) NOT NULL,
	cpf varchar(14) NOT NULL,
    senha varchar(50) NOT NULL,
	email varchar(25) NOT NULL,
	FOREIGN KEY(id_cliente) REFERENCES Carteira(id_cliente)
);