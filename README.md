## EnaFood Back End
 
Esta aplicação Back End foi desenvolvida para obter os produtos que estão disponíveis para compra, e também a sua manipulação na sacola de compras como - inserir, escolher quantidade e remover.
 
E também a aplicação conta com um sistema de login usando o JWT onde cada usuário logado poderá ter acesso a sua própria sacola de compras.
 
## Ferramentas utilizadas
 
A aplicação foi toda desenvolvida usando linguagem [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) em [Node.js](https://nodejs.org/en/docs/)
utilizando o [Express](https://expressjs.com/pt-br/). Os dados está sendo salvo no banco de dados do [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency) e para se conectar com bancos de dos foi usado o [Mongoose](https://mongoosejs.com/).
 
## Rodando a aplicação localmente
 
```bash
No terminal, clone o projeto em SSH:
 
$ git clone git@github.com:mroenca40/enafood_back_end.git
 
Entre na pasta do projeto:
 
$ cd EnaFood
 
Instale as dependências:
 
$ yarn
 
Execute a aplicação:
 
$ yarn run dev
 
Pronto, agora é possível acessar a aplicação back end a partir da rota http://localhost:3001/
 
OBS: No endpoint acima coloque a rota que deseja usar.
```
## Criando Usuário
 
O cadastro deve ser feito por um requisição do tipo <strong>POST</strong> para o endpoint <code>/users</code>, contendo as seguintes informações:
 
```json
{
  "name": "Math",
  "email": "teste@test.com",
  "password": "123456"
}
```
 
#### Listagem de usuários
 
Para fazer a listagem de todos os usuários faça uma requisição do tipo <strong>GET</strong> para o endpoint <code>/users</code> e o retorno deve ser um array
com todos os usuários disponíveis do banco, como por exemplo:
 
```json
[
  {
    "_id": "6284fd24c42c248aa55100c6",
    "name": "Matheus",
    "email": "teste@test.com",
    "password_hash": "$2a$08$wPC.ET.NSLuHhAAJMpAAmOfk0rpCh7/GmxWFb8cR6c6/pJ6FEhQxa",
    "__v": 0
  },
  {
    "_id": "6284ff1325289ed7f1d4afc3",
    "name": "Matheus",
    "email": "teste@test02.com",
    "password_hash": "$2a$08$khQWnTJ8roZriLIrTQCwreJ3IVZa.xvljqrUD7Z903tIJESC5cmC.",
    "__v": 0
  },
  {
    "_id": "62855ff56c680bd72db4e374",
    "name": "Math",
    "email": "teste@test03.com",
    "password_hash": "$2a$08$LJcpD/pKNH0WYEoDEHVsMuiacg5UvCpzZDDYU89.iq46wPemoqexy",
    "__v": 0
  }
]
```
 
## Login
 
Para fazer o login a requisição deve ser do tipo <strong>POST</strong> para o endpoint <code>/login</code>, contendo as seguintes informações:

## Inserir

```json
{
  "email": "teste@test.com",
  "password": "123456"
}
```

## Retorno 

```json
{
	"user": {
		"_id": "62855ff56c680bd72db4e374",
		"name": "Math",
		"email": "teste@test03.com"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyODU1ZmY1NmM2ODBiZDcyZGI0ZTM3NCIsImlhdCI6MTY1MjkwODAyOCwiZXhwIjoxNjUzNTEyODI4fQ.YwKAq9ITkUwxZMvp1liBWNvLOlQP8yFrsnAjlp0qRpg"
}
```
 
## Criando Seeds para produtos
 
Na aplicação você pode rodar um comando criando novos produtos que vão para o banco de dados e que podem ser consumidos no front end.
 
```json
  {
    "name": "x-tudo",
    "price": 11.99,
    "quantity": 1,
    "itens": ["tomate", "pão", "Hamburquer", "alface", "ovo", "bacon"]
  },
  {
    "name": "x-burger",
    "price": 9.99,
    "quantity": 1,
    "itens": ["tomate", "pão", "Hamburquer", "alface",]
  },
  {
  "name": "x-bacon",
    "price": 9.99,
    "quantity": 1,
    "itens": ["tomate", "pão", "Hamburquer", "alface","bacon"]
  },
```
 
```bash
  Rodando o seeders
 
  $ yarn run seed
```
## Listagem de Produtos
 
Para fazer a listagem de todos os produtos faça uma requisição do tipo <strong>GET</strong> para o endpoint <code>/products</code> e o retorno deve ser um array com todos os produtos disponíveis do banco, como por exemplo:
 
```json
  [
  {
    "_id": "627bce7ec7dc038735c099d3",
    "name": "x-tudo",
    "price": 11.99,
    "quantity": 1,
    "itens": [
      "tomate",
      "pão",
      "Hamburquer",
      "alface",
      "ovo",
      "bacon"
    ],
    "__v": 0
  },
  {
    "_id": "627bce7ec7dc038735c099d4",
    "name": "x-burger",
    "price": 9.99,
    "quantity": 1,
    "itens": [
      "tomate",
      "pão",
      "Hamburquer",
      "alface"
    ],
    "__v": 0
  },
  {
    "_id": "627bce7ec7dc038735c099d5",
    "name": "x-bacon",
    "price": 10.99,
    "quantity": 1,
    "itens": [
      "tomate",
      "pão",
      "Hamburquer",
      "alface",
      "bacon"
    ],
    "__v": 0
  }
]
```
 
## Inserindo Produtos na sacola - é obrigatório o TOKEN.
 
Para inserir os produtos faça uma requisição do tipo <strong>POST</strong> para o endpoint <code>/bag</code> e o retorno deve ser um array com todos os produtos adicionados na sacola, veja como inserir e como retorna:
 
## Inserindo
 
```json
  {
  "bag": [
  {
    "name": "x-tudo",
    "price": 10.99,
    "quantity": 2
  },
  {
    "name": "x-burguer",
    "price": 11.99,
    "quantity": 1
  }
]}
```
## Retorno
 
```json
{
  "ok": [
    {
      "name": "x-tudo",
      "price": 10.99,
      "quantity": 2,
      "userId": "6284ff1325289ed7f1d4afc3",
      "_id": "62855d6553577a180f8ffa59",
      "__v": 0
    },
    {
      "name": "x-burguer",
      "price": 11.99,
      "quantity": 1,
      "userId": "6284ff1325289ed7f1d4afc3",
      "_id": "62855d6553577a180f8ffa5a",
      "__v": 0
    }
  ]
}
```
 
OBS: No retorno sempre vem o ID do usuario logado.
 
#### Atualizando Quantidade - é obrigatório o TOKEN.
 
Aplicação permite somente remoção de um produto por requisição, deve informar um <code>ID</code> válido de um produto que existe
no database. A requisição deve ser do tipo <strong>PUT</strong> para o endpoint <code>/bag/:id</code>.
 
```json
{
  "quantity": 3
}
```
 
## Listagem de Produtos na sacola - é obrigatório o TOKEN.
 
Para fazer a listagem de todos os produtos na sacola faça uma requisição do tipo <strong>GET</strong> para o endpoint <code>/bag</code> e o retorno deve ser um array com todos os produtos disponíveis do banco, como por exemplo:
 
```json
  {
  "bag": [
    {
      "_id": "62855d6553577a180f8ffa59",
      "name": "x-tudo",
      "price": 10.99,
      "quantity": 3,
      "userId": "6284ff1325289ed7f1d4afc3",
      "__v": 0
    },
    {
      "_id": "62855d6553577a180f8ffa5a",
      "name": "x-burguer",
      "price": 11.99,
      "quantity": 1,
      "userId": "6284ff1325289ed7f1d4afc3",
      "__v": 0
    }
  ]
}
```
 
#### Removendo Produto - é obrigatório o TOKEN.
 
Aplicação permite somente remoção de um produto por requisição, deve informar um <code>ID</code> válido de um produto que existe
no database. A requisição deve ser do tipo <strong>DELETE</strong> para o endpoint <code>/bag/:id</code>.
 
## Contato
 
<a targer="_blank" href="https://www.linkedin.com/in/matheus-proenca-dev/"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>
 
## Desenvolvedor
 
[<img src="https://avatars.githubusercontent.com/u/74427703?v=4" width=115><br><sub>Matheus Proença</sub>](https://github.com/mroenca40)
 
### Contribuições
 
Caso você queira fazer alguma contribuição, fique a vontade para comentar, fazer pull requests. Toda ajuda para melhorar o código é bem vinda! :D
 
###
 

