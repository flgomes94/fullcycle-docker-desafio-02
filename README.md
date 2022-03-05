Tive que usar um git ignore na pasta do banco de dados pois estava dando erro de permissão. Possivelmente vou pedir para recriar a tabela, através dos comandos:

    docker exec -it db bash

Dentro do container executar o comando:

    mysql -uroot -p

Em seguida, inserir a senha *root*

Por fim, criar a  tabela com os comandos:

    use nodedb;
    CREATE TABLE `people` (`id` INT NOT NULL AUTO_INCREMENT,`name` VARCHAR(255));

--------



Nesse desafio você colocará em prática o que aprendemos em relação a utilização do nginx como proxy reverso. A idéia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação por sua vez adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: docker-compose up -d que tudo deverá estar funcionando e disponível na porta: 8080.

Suba tudo em um repositório e faça a entrega.

