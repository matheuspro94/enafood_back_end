## Em construção

## EnaFood Back End 

Está aplicação Back End foi desenvolvida para obter os produtos que estão disponiveis para compra, e tambem a sua manipulção na sacola de compras como - inserir, escolher quantidade e remover.

E tambem aplicação conta com um sistema de login usando o JWT onde cada ususario logado poderá ter acesso a sua propria sacola de compras.

## Ferramentas utilizadas

A aplicação foi toda desenvolvida usando linguagem [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) em [Node.js](https://nodejs.org/en/docs/)
utilizando o [Express](https://expressjs.com/pt-br/). Os dados está sendo salvo no banco de dados do [MongoDB Atlas](https://www.mongodb.com/pt-br/cloud/atlas/efficiency) e para se conectar com bancos de dos foi usado o [Mongoose](https://mongoosejs.com/).

## Rodando a aplicação localmente

```bash
No terminal, clone o projeto em SSH:

$ git clone git@github.com:mroenca40/enafood_back_end.git

Entre na pasta do projeto:

$ cd EnaFood

Instale as dependencias:

$ yarn

Execute a aplicação:

$ yarn run dev

Pronto, agora é possível acessar a aplicação back end a partir da rota http://localhost:3001/

OBS: No endpoint acima coloque a rota que deseja usar.
```
## Criando Usuario

O cadastro deve ser feito por um requisição do tipo <strong>POST</strong> para o endpoint <code>/users</code>, contendo as seguintes informações:

```json
{
	"name": "Math",
	"email": "teste@test.com",
	"password": "123456"
}
```
## Login

Para fazer o login a requisição deve ser do tipo <strong>POST</strong> para o endpoint <code>/login</code>, contendo as sequintes informaçoes:

```json
{
	"email": "teste@test.com",
	"password": "123456"
}
```

## Criando Seeds para produtos

Na aplicação você pode rodar um comando criando novos produtos que vão para o banco de dados e que podemos ser consumindos no front end.

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

## Inserindo Produtos na sacola - é obrigatorio o TOKEN.

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

#### Atualizando Quantidade - é obrigatorio o TOKEN.

Aplicação permite somente remoção de um produto por requisição, deve informar um <code>ID</code> válido de um produto que existe
no database. A requisição deve ser do tipo <strong>PUT</strong> para o endpoint <code>/bag/:id</code>.

```json
{
	"quantity": 3
}
```

## Listagem de Produtos na sacola - é obrigatorio o TOKEN.

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

#### Removendo Produto - é obrigatorio o TOKEN.

Aplicação permite somente remoção de um produto por requisição, deve informar um <code>ID</code> válido de um produto que existe
no database. A requisição deve ser do tipo <strong>DELETE</strong> para o endpoint <code>/bag/:id</code>.

## Contato

<a targer="_blank" href="https://www.linkedin.com/in/matheus-proenca-dev/"><img src="https://img.icons8.com/fluency/48/000000/linkedin.png"/></a>

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/74427703?v=4" width=115><br><sub>Matheus Proença</sub>](https://github.com/mroenca40)

### Contribuições

Caso você queira fazer alguma contribuição, fique a vontade para comentar, fazer pull requests. Toda ajuda para melhorar o código é bem vinda! :D

###
