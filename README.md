# OneBitFlix

O OneBitFlix é uma plataforma de cursos em vídeo sobre programação. O projeto separa a interface web da API e usa PostgreSQL para armazenar usuários, cursos, episódios, favoritos, curtidas e o progresso de visualização.

**Acesse a aplicação:** [onebitflix-kappa.vercel.app](https://onebitflix-kappa.vercel.app/)

## Funcionalidades

- Catálogo público e cadastro de usuários.
- Login com autenticação JWT.
- Página inicial autenticada com cursos em destaque, recentes, populares e organizados por categoria.
- Busca de cursos, favoritos e curtidas.
- Reprodução de episódios, navegação entre episódios e salvamento do tempo assistido.
- Edição de dados pessoais e senha.

## Tecnologias

- **Frontend:** Next.js 16 (Pages Router), React 18, TypeScript, Sass, Reactstrap e ReactPlayer.
- **Backend:** Node.js, Express, TypeScript, Sequelize e JWT.
- **Banco de dados:** PostgreSQL hospedado no Supabase.
- **Hospedagem:** frontend na Vercel e API no Render.

## Estrutura do projeto

```text
frontend/   Aplicação Next.js
backend/    API Express, modelos, migrations e seeders
```

Não há scripts na raiz: instale as dependências e execute os comandos dentro de `frontend/` ou `backend/`.

## Execução local

Requisitos: Node.js 20.9 ou superior e npm. Por padrão, o frontend usa a porta `4000` e a API usa a porta `3001`.

### 1. Configure o backend

No PowerShell, a partir da raiz do repositório:

```powershell
Set-Location backend
if (!(Test-Path .env)) { Copy-Item .env.example .env }
```

Preencha `backend/.env` com a URL de conexão do PostgreSQL e segredos locais:

```dotenv
DATABASE_URL=postgresql://usuario:senha@host:5432/banco
JWT_KEY=gere-uma-chave-aleatoria-forte
ADMINJS_COOKIE_PASSWORD=gere-outra-chave-aleatoria-forte
```

As três variáveis são obrigatórias na configuração atual do backend. Não compartilhe nem versione o arquivo `.env`.

Instale as dependências, aplique as migrations e carregue as categorias e os cursos de exemplo:

```powershell
npm ci
npx sequelize-cli db:migrate --env development
npx sequelize-cli db:seed:all --env development
```

Os seeders atuais criam categorias e cursos, mas não criam episódios nem arquivos de vídeo. Para reproduzir episódios, cadastre-os e disponibilize os arquivos descritos na seção [Vídeos e thumbnails](#vídeos-e-thumbnails).

Inicie a API em um terminal:

```powershell
npm run dev
```

### 2. Configure o frontend

Em outro terminal, a partir da raiz:

```powershell
Set-Location frontend
```

Crie `frontend/.env.local` com a URL base da API. Informe somente a origem, sem barra no final e sem o prefixo `/api`:

```dotenv
NEXT_PUBLIC_BASEURL=http://localhost:3001
```

Instale as dependências e inicie a aplicação:

```powershell
npm ci
npm run dev
```

Acesse [http://127.0.0.1:4000](http://127.0.0.1:4000). O frontend usa `NEXT_PUBLIC_BASEURL` nas chamadas HTTP e para carregar imagens e vídeos. Alterações nessa variável exigem reiniciar o servidor local.

## API

As rotas protegidas recebem `Authorization: Bearer <token>`, exceto o streaming, que recebe o token pela query string.

| Método                  | Rota                                                                                | Acesso       |
| ----------------------- | ----------------------------------------------------------------------------------- | ------------ |
| `POST`                  | `/auth/register`                                                                    | Público      |
| `POST`                  | `/auth/login`                                                                       | Público      |
| `GET`                   | `/courses/newest`                                                                   | Público      |
| `GET`                   | `/courses/featured`, `/courses/popular`, `/courses/search?name=...`, `/courses/:id` | JWT          |
| `GET`                   | `/categories`, `/categories/:id`                                                    | JWT          |
| `GET`, `POST`, `DELETE` | `/favorites` e `/favorites/:id`                                                     | JWT          |
| `POST`, `DELETE`        | `/likes` e `/likes/:id`                                                             | JWT          |
| `GET`                   | `/episodes/stream?videoUrl=...&token=...`                                           | JWT na query |
| `GET`, `POST`           | `/episodes/:id/watchTime`                                                           | JWT          |
| `GET`                   | `/users/current`, `/users/current/watching`                                         | JWT          |
| `PUT`                   | `/users/current`, `/users/current/password`                                         | JWT          |

## Implantação

### Supabase

Crie um projeto PostgreSQL e use a URL de conexão como `DATABASE_URL` no serviço de backend do Render. Execute as migrations no banco de produção antes de iniciar a aplicação. Os seeders são opcionais e devem ser executados somente quando apropriado para o banco.

### Render: API

- Defina `backend/` como diretório raiz do serviço.
- Comando de build: `npm ci && npm run build`.
- Comando de inicialização: `npm start`.
- Configure `DATABASE_URL`, `JWT_KEY` e `ADMINJS_COOKIE_PASSWORD` nas variáveis de ambiente do serviço. O Render define `PORT` automaticamente.
- Depois de criar o serviço, use a URL pública dele como `NEXT_PUBLIC_BASEURL` na Vercel.

### Vercel: frontend

- Defina `frontend/` como diretório raiz e mantenha o preset do Next.js.
- Configure `NEXT_PUBLIC_BASEURL` com a origem pública do serviço no Render, sem barra no final nem `/api`. Exemplo: `https://seu-servico.onrender.com`.
- Faça um novo deploy após alterar essa variável, pois seu valor é incorporado ao build do frontend.

### Vídeos e thumbnails

O endpoint de streaming lê arquivos do disco em `backend/uploads/`, usando o caminho salvo em `videoUrl` (por exemplo, `videos/course-1/episodio.mp4`). A pasta `backend/uploads/videos/` é ignorada pelo Git, e o sistema de arquivos padrão do Render não deve ser considerado armazenamento permanente. Configure um Persistent Disk no Render montado no caminho `uploads/` do serviço e mantenha os arquivos nele, ou adapte o backend para usar armazenamento de objetos.

As thumbnails ficam em `backend/public/thumbnails/` e também são ignoradas pelo Git. Garanta que os arquivos estejam disponíveis no deploy do backend ou sirva-os de um armazenamento externo.

## Scripts disponíveis

No frontend (`frontend/`):

- `npm run dev`: inicia o servidor de desenvolvimento na porta `4000`.
- `npm run build`: gera o build de produção.
- `npm run start`: inicia o build de produção.
- `npm run lint`: executa o ESLint.

No backend (`backend/`):

- `npm run dev`: inicia a API em modo de desenvolvimento.
- `npm run build`: compila o TypeScript para `dist/`.
- `npm start`: inicia a versão compilada.

Os arquivos `package.json` atuais não configuram scripts de testes automatizados.
