# OneBitFlix Backend

API REST do OneBitFlix, responsável por autenticação, catálogo de cursos, categorias, favoritos, curtidas, perfil e reprodução de episódios. A API usa Express, TypeScript, Sequelize e PostgreSQL.

## Tecnologias

- Node.js, Express e TypeScript.
- Sequelize e PostgreSQL.
- JWT para autenticação.
- Supabase como hospedagem PostgreSQL e Render para a API publicada.

## Requisitos

- Node.js e npm.
- Banco PostgreSQL acessível pela aplicação, local ou no Supabase.

## Configuração local

A partir da raiz do repositório, entre no diretório do backend e instale as dependências:

```bash
cd backend
npm ci
```

Copie `.env.example` para `.env` (no PowerShell, use `Copy-Item .env.example .env`) e preencha as variáveis obrigatórias:

```dotenv
DATABASE_URL=postgresql://usuario:senha@host:5432/banco
JWT_KEY=gere-uma-chave-aleatoria-forte
ADMINJS_COOKIE_PASSWORD=gere-outra-chave-aleatoria-forte
```

- `DATABASE_URL`: URL de conexão do PostgreSQL.
- `JWT_KEY`: segredo usado para assinar e validar tokens JWT.
- `ADMINJS_COOKIE_PASSWORD`: segredo obrigatório pela configuração atual de ambiente.

Use valores fortes e mantenha `.env` fora do Git. O arquivo `.env.example` contém apenas os nomes das variáveis.

### Banco de dados

Com o PostgreSQL acessível e `DATABASE_URL` configurada, aplique as migrations:

```bash
npx sequelize-cli db:migrate --env development
```

Para carregar os dados iniciais de categorias e cursos:

```bash
npx sequelize-cli db:seed:all --env development
```

Os seeders não criam episódios nem arquivos de vídeo. Para disponibilizar aulas, cadastre os episódios no banco e publique os arquivos correspondentes conforme a seção [Vídeos e thumbnails](#vídeos-e-thumbnails).

### Iniciar a API

```bash
npm run dev
```

Por padrão, a API fica disponível em [http://localhost:3001](http://localhost:3001). A porta pode ser substituída pela variável `PORT`, definida automaticamente pelo Render em produção.

## Rotas

As rotas protegidas recebem o cabeçalho `Authorization: Bearer <token>`. A rota de streaming recebe o token pela query string.

| Método                  | Rota                                                                                | Autenticação |
| ----------------------- | ----------------------------------------------------------------------------------- | ------------ |
| `POST`                  | `/auth/register`                                                                    | Pública      |
| `POST`                  | `/auth/login`                                                                       | Pública      |
| `GET`                   | `/courses/newest`                                                                   | Pública      |
| `GET`                   | `/courses/featured`, `/courses/popular`, `/courses/search?name=...`, `/courses/:id` | JWT          |
| `GET`                   | `/categories`, `/categories/:id`                                                    | JWT          |
| `GET`, `POST`, `DELETE` | `/favorites`, `/favorites/:id`                                                      | JWT          |
| `POST`, `DELETE`        | `/likes`, `/likes/:id`                                                              | JWT          |
| `GET`                   | `/episodes/stream?videoUrl=...&token=...`                                           | JWT na query |
| `GET`, `POST`           | `/episodes/:id/watchTime`                                                           | JWT          |
| `GET`                   | `/users/current`, `/users/current/watching`                                         | JWT          |
| `PUT`                   | `/users/current`, `/users/current/password`                                         | JWT          |

As rotas são montadas na raiz do domínio; não há prefixo `/api`.

## Scripts

- `npm run dev`: inicia a API em modo de desenvolvimento com recarga automática.
- `npm run build`: compila o TypeScript para `dist/`.
- `npm start`: inicia a versão compilada.

O `package.json` atual não define um script de testes automatizados.

## Deploy no Render e Supabase

### Supabase

Crie um projeto PostgreSQL no Supabase e configure a URL de conexão como `DATABASE_URL` no Render. Antes de iniciar a API pela primeira vez, aplique as migrations no banco de produção. Execute seeders somente se quiser inserir os dados de exemplo naquele banco.

### Render

- Configure `backend/` como diretório raiz do serviço.
- Comando de build: `npm ci && npm run build`.
- Comando de inicialização: `npm start`.
- Configure `DATABASE_URL`, `JWT_KEY` e `ADMINJS_COOKIE_PASSWORD` nas variáveis de ambiente do serviço.
- O Render fornece `PORT`; a API usa esse valor automaticamente.

## Vídeos e thumbnails

O endpoint `/episodes/stream` lê o vídeo do disco local em `uploads/`, usando o caminho salvo em `videoUrl` (por exemplo, `videos/course-1/episodio.mp4`). Os vídeos em `uploads/videos/` e as thumbnails em `public/thumbnails/` não são versionados pelo Git.

O sistema de arquivos padrão do Render não é armazenamento permanente. Para manter os vídeos após reinicializações e novos deploys, configure um Persistent Disk montado em `uploads/` ou adapte a aplicação para usar armazenamento de objetos. Também garanta que as thumbnails estejam presentes em `public/thumbnails/` no deploy ou disponibilize-as em um serviço externo.
