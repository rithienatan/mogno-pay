SELECT * FROM CLIENTE WHERE email = '${user.email}';

SELECT * FROM CARTEIRA WHERE id_cliente = user.id;