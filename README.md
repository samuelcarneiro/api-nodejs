# API Node.js
<p>Projeto de uma API construída em Node.js, Express, Prisma, JWT e banco de dados MySQL. O objetivo do projeto é fornecer uma base para desenvolvimento de APIs RESTfull escaláveis e bem estruturadas.</p>

## Funcionalidades disponíveis
- Cadastro de usuários (nome, email e senha) impossibilitando cadastro de usuários com o mesmo email;
- Os dados do cadastro são salvos no banco de dados Mysql local;
- Login com verificação de usuário e senha;
- Listagem dos usuários salvos no banco de dados somente por logins autorizados ao acesso;
- Validação de entradas de dados


## Tecnologias utilizadas
- **Node.js** > Ambiente de execução Javascript do lado servidor (backend);
- **Express.js** > Framework Node.js;
- **Prisma** > Interação com o banco de dados relacional MySQL;
- **JWT (Json Web Token)** > Para autenticar e autorizar usuários;


### Pré-requisitos
<p>Antes de começar, você precisa ter as seguintes ferramentas instaladas:</p>
Node.js e MySQL


### Instalação
1. Clone este repositório:
```
git clone https://github.com/samuelcarneiro/api-nodejs.git
```
2. Acesse o diretório do projeto no seu computador:
```
cd api-nodejs
```
3. Instale as dependências do projeto:
```
DATABASE_URL="mysql://USER_DB:PASSWORD@localhost:PORT_MYSQL/NAME_DATABASE"
JWT_SECRET="YOUR_KEY_JWT_gerada_pelo_comando_abaixo"
```
*Utilizando o comando `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
` no terminal, o Node.js gerará uma string que você poderá utilizar como sua Key JWT_SECRET*

7. Inicie o servidor:
```
npm start
```
*A API estará disponível em http://localhost:3000*

### Contribuindo
<p>Contribuições são bem-vindas! Siga os seguintes passos para contribuir:</p>

- Faça um **fork** deste repositório.
- Crie uma nova branch para sua modificação `git checkout -b minha-modificacao`.
- Faça as alterações e commit `git commit -am 'Adiciona nova funcionalidade'`.
- Push para a branch `git push origin minha-modificacao`.
- Abra um pull request explicando as mudanças realizadas.
