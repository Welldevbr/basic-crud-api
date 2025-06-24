# Basic CRUD com Node.js e Express.js

Este projeto é um CRUD simples para cadastro de usuários, desenvolvido com Node.js e Express.js. Ele permite criar, listar, atualizar e deletar usuários, onde cada usuário possui apenas as propriedades `name` e `age`.

## Funcionalidades

- Listar todos os usuários  cadastrado
- Busca um usuário cadastrado pelo nome
- Listar apenas um usuário cadastrado
- Adicionar novo usuário
- Atualizar informações de um usuário existente
- Remover um usuário do cadastro

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado em sua máquina

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/Welldevbr/simple-crud.git
cd simple-crud
npm install
```

## Como Usar

Inicie o servidor com o comando:

```bash
npm start
```

O servidor será iniciado em [http://localhost:3000]( http://localhost:3000) 
e para acessar a documentação basta acessar: [http://localhost:3000/api-docs/]( http://localhost:3000/api-docs/)

## Endpoints publicos

- `GET /users` - Lista todos os usuários
- `GET /users?name` - Lista apenas o usuário filtrado
- `GET /users/:id` - Lista apenas um usuário

## Endpoints privados

- `POST /users` - Cria um novo usuário (`name` e `age` no body)
- `PUT /users/:id` - Atualiza um usuário pelo ID
- `DELETE /users/:id` - Remove um usuário pelo ID

## Tecnologias Utilizadas

- Node.js
- Express.js
- Swagger
