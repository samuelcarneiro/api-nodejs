# API Node.js
<p>Projeto de uma API construída em Node.js, Express, Prisma, JWT e banco de dados MySQL. O objetivo do projeto é fornecer uma base para desenvolvimento de APIs RESTfull escaláveis e bem estruturadas.</p>

## Funcionalidades disponíveis
- Cadastro de usuários (nome, email e senha) impossibilitando cadastro de usuários com o mesmo email;
- Os dados do cadastro são salvos no banco de dados Mysql local;
- Login com verificação de usuário e senha;
- Listagem dos usuários salvos no banco de dados somente por logins autorizados ao acesso;
- Validação de entradas de dados


## Tecnologias utilizadas
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MySQL](https://img.shields.io/badge/MySQL-02569B?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-000?style=for-the-badge&logo=windows&logoColor=2CA5E0)
![Bcrypt](https://img.shields.io/badge/Bcrypt-35495E?style=for-the-badge)
![JWT](https://img.shields.io/badge/Jwt-5C2D91?style=for-the-badge)


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

4. Inicie o servidor:
```
npm start
```
*A API estará disponível em http://localhost:3000*
<hr>
### Contribuindo
<p>Contribuições são bem-vindas! Siga os seguintes passos para contribuir:</p>

- Faça um **fork** deste repositório.
- Crie uma nova branch para sua modificação `git checkout -b minha-modificacao`.
- Faça as alterações e commit `git commit -am 'Adiciona nova funcionalidade'`.
- Push para a branch `git push origin minha-modificacao`.
- Abra um pull request explicando as mudanças realizadas.
