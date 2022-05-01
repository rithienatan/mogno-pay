CREATE TABLE Carteira(
	id_cliente serial NOT NULL,
	nome varchar(50) NOT NULL,
	numero integer NOT NULL,
	validade date NOT NULL,
	cvv integer NOT NULL,
	cardType varchar(10) NOT NULL,
	carteiraHash varchar(64) NOT NULL PRIMARY KEY,
	UNIQUE(id_cliente)
);
