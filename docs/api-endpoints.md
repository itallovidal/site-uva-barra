# API Endpoints

Referência de todos os endpoints da API backend.

---

## User

### POST /user/login

Autentica um usuário e retorna um token de acesso.

**Auth:** Não requer

**Request Body:**

```json
{
  "email": "admin@email.com",
  "password": "admin123"
}
```

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "accessToken": "eyJhbGciOiJIUzI1NiIs...",
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "admin",
      "email": "admin@email.com",
      "avatarUrl": null,
      "role": "admin",
      "profession": "DESENVOLVEDOR",
      "bio": "admin do sistema",
      "status": "active",
      "createdAt": "2026-06-04T10:00:00.000Z",
      "updatedAt": "2026-06-04T10:00:00.000Z"
    }
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Credenciais inválidas",
    "code": "INVALID_CREDENTIALS"
  }
}
```

---

### POST /user/

Cria um novo usuário (colaborador/admin).

**Auth:** Requer Bearer token

**Request Body:**

```json
{
  "name": "admin",
  "email": "admin@email.com",
  "password": "admin123",
  "profession": "DESENVOLVEDOR",
  "bio": "admin do sistema",
  "role": "admin"
}
```

**Response 201:**

```json
{
  "status": 201,
  "data": {
    "id": "660e8400-e29b-41d4-a716-446655440001"
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

**Response 409:**

```json
{
  "status": 409,
  "data": null,
  "error": {
    "message": "Email já cadastrado",
    "code": "EMAIL_ALREADY_EXISTS"
  }
}
```

---

### GET /user/:id

Busca um usuário por ID.

**Auth:** Requer Bearer token

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "c2e7ccde-2ca4-4379-8c54-616f578bc972",
    "name": "João Silva",
    "email": "admin@email.com",
    "avatarUrl": null,
    "profession": "desenvolvedor",
    "role": "collaborator",
    "bio": "Desenvolvedor full-stack"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Usuário não encontrado",
    "code": "USER_NOT_FOUND"
  }
}
```

---

### GET /user/list

Lista todos os usuários.

**Auth:** Requer Bearer token

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "1",
      "name": "Duda Nicolich",
      "email": "duda@email.com",
      "avatarUrl": null,
      "profession": "editor_chefe",
      "role": "collaborator",
      "bio": "Supervisão de Estágio"
    }
  ]
}
```

---

### GET /user/email/:email

Busca um usuário por email.

**Auth:** Requer Bearer token

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "c2e7ccde-2ca4-4379-8c54-616f578bc972",
    "name": "João Silva",
    "email": "admin@email.com",
    "avatarUrl": null,
    "profession": "desenvolvedor",
    "role": "collaborator",
    "bio": "Desenvolvedor full-stack"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Usuário não encontrado",
    "code": "USER_NOT_FOUND"
  }
}
```

---

### PUT /user/:id

Atualiza um usuário.

**Auth:** Requer Bearer token

**Request Body (parcial):**

```json
{
  "bio": "admin"
}
```

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "c2e7ccde-2ca4-4379-8c54-616f578bc972",
    "name": "João Silva",
    "email": "admin@email.com",
    "avatarUrl": null,
    "profession": "desenvolvedor",
    "role": "collaborator",
    "bio": "admin"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Usuário não encontrado",
    "code": "USER_NOT_FOUND"
  }
}
```

---

### DELETE /user/:id

Deleta um usuário.

**Auth:** Requer Bearer token

**Response 204:** (sem body)

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Usuário não encontrado",
    "code": "USER_NOT_FOUND"
  }
}
```

---

## Registration

### POST /registration/

Solicita registro de novo colaborador (acesso público).

**Auth:** Não requer

**Request Body:**

```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "123456",
  "profession": "desenvolvedor",
  "bio": "Backend developer"
}
```

**Response 201:**

```json
{
  "status": 201,
  "data": {
    "id": "req-1717986400000"
  }
}
```

**Response 409:**

```json
{
  "status": 409,
  "data": null,
  "error": {
    "message": "Email já cadastrado",
    "code": "EMAIL_ALREADY_EXISTS"
  }
}
```

---

### GET /registration/requests

Lista solicitações de registro pendentes.

**Auth:** Requer Bearer token

**Query Params:**
- `status` — Filtrar por status: `PENDING`, `APPROVED`, `REJECTED`
- `page` — Número da página (default: `1`)
- `perPage` — Itens por página (default: `10`)

**Exemplo:** `GET /registration/requests?status=PENDING&page=1&perPage=10`

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "req-1",
      "name": "Carlos Almeida",
      "email": "carlos.almeida@email.com",
      "avatarUrl": null,
      "role": "collaborator",
      "profession": "redator",
      "bio": "Jornalista formado pela UFF",
      "status": "pending",
      "createdAt": "2026-05-20T00:00:00.000Z",
      "updatedAt": "2026-05-20T00:00:00.000Z"
    }
  ],
  "meta": {
    "page": 1,
    "perPage": 10,
    "total": 3,
    "totalPages": 1
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

### POST /registration/:id/approve

Aprova uma solicitação de registro.

**Auth:** Requer Bearer token

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "success": true
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Solicitação não encontrada",
    "code": "NOT_FOUND"
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

### POST /registration/:id/reject

Rejeita uma solicitação de registro.

**Auth:** Requer Bearer token

**Request Body (opcional):**

```json
{
  "reason": "Perfil não atende aos requisitos"
}
```

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "success": true
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Solicitação não encontrada",
    "code": "NOT_FOUND"
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

## News

### POST /news

Cria uma nova notícia.

**Auth:** Requer Bearer token

**Request Body:**

```json
{
  "title": "1ª Semana de Educação Física aproxima os alunos da prática profissional",
  "slug": "1a-semana-de-educacao-fisica-aproxima-os-alunos-da-pratica-profissional",
  "summary": "A primeira Semana de Educação Física aconteceu entre os dias 12 e 16/09...",
  "content": "<main id='materia'>...</main>",
  "coverImageUrl": "https://example.com/capa.jpg",
  "category": "Ciência & Tecnologia",
  "author": "Agência UVA - Barra",
  "status": "published",
  "tags": ["universidade veiga de almeida"],
  "featured": false,
  "readingTime": 3
}
```

**Response 201:**

```json
{
  "status": 201,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Título da Notícia",
    "slug": "titulo-da-noticia",
    "summary": "Resumo curto do artigo",
    "content": "Conteúdo completo do artigo...",
    "coverImageUrl": "https://exemplo.com/capa.jpg",
    "category": "tecnologia",
    "author": "Nome do Autor",
    "status": "draft",
    "tags": ["tag1", "tag2"],
    "featured": false,
    "readingTime": 3,
    "createdAt": "2026-06-04T10:00:00.000Z",
    "updatedAt": "2026-06-04T10:00:00.000Z",
    "publishedAt": null
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

### GET /news/:id

Busca uma notícia por ID.

**Auth:** Não requer

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "3f6494ec-6366-43af-8572-440f07c4bf8f",
    "title": "'Zico, O Samurai de Quintino'...",
    "slug": "zico-o-samurai-de-quintino",
    "summary": "Documentário acompanha...",
    "content": "# Zico, O Samurai de Quintino...",
    "coverImageUrl": "/agencia-uva-fallback.jpg",
    "category": "Cultura & Artes",
    "author": "Agência UVA Barra",
    "status": "published",
    "tags": ["agencia uva barra", "cinema"],
    "featured": false,
    "readingTime": 3,
    "createdAt": "2026-06-04T10:00:00.000Z",
    "updatedAt": "2026-06-04T10:00:00.000Z",
    "publishedAt": "2026-06-04T03:02:25.983Z"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Notícia não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### PUT /news/:id

Atualiza uma notícia.

**Auth:** Requer Bearer token

**Request Body (parcial):**

```json
{
  "title": "Título atualizado",
  "featured": false,
  "status": "draft",
  "publishedAt": null
}
```

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Título atualizado",
    "slug": "titulo-da-noticia",
    "summary": "Resumo curto do artigo",
    "content": "Conteúdo completo do artigo...",
    "coverImageUrl": "https://exemplo.com/capa.jpg",
    "category": "tecnologia",
    "author": "Nome do Autor",
    "status": "draft",
    "tags": ["tag1", "tag2"],
    "featured": false,
    "readingTime": 3,
    "createdAt": "2026-06-04T10:00:00.000Z",
    "updatedAt": "2026-06-04T10:00:00.000Z",
    "publishedAt": null
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Notícia não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### DELETE /news/:id

Deleta uma notícia.

**Auth:** Requer Bearer token

**Response 204:** (sem body)

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Notícia não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### GET /news

Lista notícias com paginação e filtros.

**Auth:** Não requer (mas `status=unpublished` requer auth)

**Query Params:**
- `page` — Número da página (default: `1`)
- `perPage` — Itens por página (default: `10`)
- `status` — `published` ou `unpublished`
- `sort` — `desc` (default) ou `asc`

**Exemplos:**
- `GET /news?page=1&perPage=10`
- `GET /news?page=1&perPage=10&status=published`
- `GET /news?page=1&perPage=10&status=unpublished` (requer auth)

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "3f6494ec-6366-43af-8572-440f07c4bf8f",
      "title": "'Zico, O Samurai de Quintino'...",
      "summary": "Documentário acompanha...",
      "coverImageUrl": "https://i0.wp.com/...",
      "category": "Cultura & Artes",
      "tags": ["agencia uva barra", "cinema"],
      "featured": false,
      "readingTime": 3,
      "publishedAt": "2026-06-04T03:02:25.983Z",
      "author": "Agência UVA - Barra"
    }
  ],
  "meta": {
    "page": 1,
    "perPage": 10,
    "total": 42,
    "totalPages": 5
  }
}
```

**Response 401 (para unpublished):**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

### GET /news/category/:category

Lista notícias por categoria.

**Auth:** Não requer (mas `status=unpublished` requer auth)

**Query Params:**
- `page` — Número da página (default: `1`)
- `perPage` — Itens por página (default: `10`)
- `status` — `published` ou `unpublished`

**Exemplo:** `GET /news/category/ciencia?page=1&perPage=10&status=published`

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "...",
      "title": "...",
      "summary": "...",
      "coverImageUrl": "...",
      "category": "Ciência & Tecnologia",
      "tags": ["..."],
      "featured": false,
      "readingTime": 3,
      "publishedAt": "2026-06-04T03:02:25.983Z",
      "author": "Agência UVA - Barra"
    }
  ],
  "meta": {
    "page": 1,
    "perPage": 10,
    "total": 5,
    "totalPages": 1
  }
}
```

---

### GET /news/slug/:slug

Busca uma notícia por slug.

**Auth:** Não requer

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "title": "Título da Notícia",
    "slug": "titulo-da-noticia",
    "summary": "Resumo curto do artigo",
    "content": "Conteúdo completo do artigo...",
    "coverImageUrl": "https://exemplo.com/capa.jpg",
    "category": "tecnologia",
    "author": "Nome do Autor",
    "status": "published",
    "tags": ["tag1", "tag2"],
    "featured": false,
    "readingTime": 3,
    "createdAt": "2026-06-04T10:00:00.000Z",
    "updatedAt": "2026-06-04T10:00:00.000Z",
    "publishedAt": "2026-06-04T12:00:00.000Z"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Notícia não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### GET /news/search

Busca notícias por termo.

**Auth:** Não requer

**Query Params (obrigatório):**
- `q` — Termo de busca

**Query Params (opcional):**
- `order` — `newest` (default) ou `oldest`
- `page` — Número da página (default: `1`)
- `perPage` — Itens por página (default: `10`)

**Exemplos:**
- `GET /news/search?q=educacao`
- `GET /news/search?q=semana-de&order=oldest`
- `GET /news/search?q=uva&page=2&perPage=5`

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "...",
      "title": "...",
      "summary": "...",
      "coverImageUrl": "...",
      "category": "...",
      "tags": ["..."],
      "featured": false,
      "readingTime": 3,
      "publishedAt": "2026-06-04T03:02:25.983Z",
      "author": "Agência UVA - Barra"
    }
  ],
  "meta": {
    "page": 1,
    "perPage": 10,
    "total": 3,
    "totalPages": 1
  }
}
```

**Response 400 (sem parâmetro q):**

```json
{
  "status": 400,
  "data": null,
  "error": {
    "message": "Parâmetro de busca é obrigatório",
    "code": "VALIDATION_ERROR"
  }
}
```

---

## Newsletter

### POST /newsletter/register

Registra um email na newsletter.

**Auth:** Não requer

**Request Body:**

```json
{
  "email": "test@example.com"
}
```

**Response 201:**

```json
{
  "status": 201,
  "data": {
    "success": true
  }
}
```

**Response 400:**

```json
{
  "status": 400,
  "data": null,
  "error": {
    "message": "Email é obrigatório",
    "code": "VALIDATION_ERROR"
  }
}
```

---

## Categories

### POST /categories

Cria uma nova categoria.

**Auth:** Requer Bearer token

**Request Body:**

```json
{
  "name": "Tecnologia"
}
```

Ou com tags:

```json
{
  "name": "Saúde & Bem Estar",
  "tags": ["Saúde", "Saúde Mental", "Psicologia"]
}
```

**Response 201:**

```json
{
  "status": 201,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Tecnologia",
    "tags": []
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

---

### GET /categories

Lista todas as categorias.

**Auth:** Não requer

**Response 200:**

```json
{
  "status": 200,
  "data": [
    {
      "id": "cat_tec",
      "name": "Tecnologia",
      "tags": ["tag_ia", "tag_startups", "tag_5g"]
    },
    {
      "id": "cat_edu",
      "name": "Educação",
      "tags": ["tag_educacao"]
    }
  ]
}
```

---

### GET /categories/:id

Busca uma categoria por ID.

**Auth:** Não requer

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Tecnologia",
    "tags": ["tech", "inovacao"]
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Categoria não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### PUT /categories/:id

Atualiza uma categoria.

**Auth:** Requer Bearer token

**Request Body:**

```json
{
  "name": "Saúde & Bem Estar",
  "tags": ["Saúde", "Bem Estar", "Psicologia"]
}
```

**Response 200:**

```json
{
  "status": 200,
  "data": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Saúde & Bem Estar",
    "tags": ["Saúde", "Bem Estar", "Psicologia"]
  }
}
```

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Categoria não encontrada",
    "code": "NOT_FOUND"
  }
}
```

---

### DELETE /categories/:id

Deleta uma categoria.

**Auth:** Requer Bearer token

**Response 204:** (sem body)

**Response 401:**

```json
{
  "status": 401,
  "data": null,
  "error": {
    "message": "Não autorizado",
    "code": "UNAUTHORIZED"
  }
}
```

**Response 404:**

```json
{
  "status": 404,
  "data": null,
  "error": {
    "message": "Categoria não encontrada",
    "code": "NOT_FOUND"
  }
}
```
