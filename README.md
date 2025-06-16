# 🛍 Product API – NestJS + PostgreSQL + Docker

API RESTful com NestJS para cadastro de produtos, incluindo upload de imagens e persistência com PostgreSQL. O projeto é containerizado usando Docker.

---

## ✅ Funcionalidades

- CRUD completo de produtos
- Upload de imagem com `multer` (salvo em `./uploads`)
- Banco de dados PostgreSQL
- Documentação com Swagger
- Variáveis de ambiente via `.env`
- Docker para rodar tudo com um comando

---

## 📦 Tecnologias

- [NestJS](https://nestjs.com/)
- PostgreSQL
- TypeORM
- Multer
- Swagger
- Docker / Docker Compose

---

## 🚀 Como executar

### 1. Clone o projeto

```bash
git clone https://github.com/gabrielgfc/product-api.git
cd product-api
````

### 2. Crie o arquivo `.env`

```env
DATABASE_HOST=postgres
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=postgres
DATABASE_NAME=products_db
```

### 3. Execute com Docker (API + Banco)

```bash
docker-compose up --build
```

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)
Swagger: [http://localhost:3000/api](http://localhost:3000/api)

---

## 🔎 Endpoints principais

| Método | Rota            | Descrição                     |
| ------ | --------------- | ----------------------------- |
| POST   | `/products`     | Cria um produto (com imagem)  |
| GET    | `/products`     | Lista todos os produtos       |
| GET    | `/products/:id` | Retorna um produto específico |
| PUT    | `/products/:id` | Atualiza um produto           |
| DELETE | `/products/:id` | Remove um produto             |

---

## 🧪 Exemplo de Requisição (cURL)

```bash
curl -X POST http://localhost:3000/products \
  -F "nome=Camisa Azul" \
  -F "descricao=Camisa de algodão" \
  -F "preco=79.90" \
  -F "categoria=Roupas" \
  -F "imagem=@./exemplo.jpg"
```

---

## 📁 Uploads

As imagens são salvas localmente em:

```
/uploads
```

No banco de dados, é salvo apenas o caminho da imagem.

---

## 📚 Documentação Swagger

Acesse:
📎 [http://localhost:3000/api](http://localhost:3000/api)


## 👤 Autor

Gabriel Carvalho
🔗 [LinkedIn](https://linkedin.com/in/gabrielgfc1)
🐙 [GitHub](https://github.com/gabrielgfc)

---
