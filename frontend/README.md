# OneBitFlix Frontend

Interface web do OneBitFlix, uma plataforma de cursos em vídeo sobre programação. O frontend é uma aplicação Next.js com Pages Router e consome a API Express disponível no Render.

**Aplicação publicada:** [onebitflix-kappa.vercel.app](https://onebitflix-kappa.vercel.app/)

## Funcionalidades

- Páginas públicas de apresentação, cadastro e login.
- Página inicial autenticada com cursos em destaque, recentes, populares, categorias e favoritos.
- Busca e página de detalhes dos cursos.
- Reprodução de episódios, navegação entre aulas e retomada do progresso assistido.
- Gerenciamento de curtidas, favoritos e dados do perfil.

## Tecnologias

- Next.js 16 (Pages Router) e React 18.
- TypeScript, Sass e Bootstrap/Reactstrap.
- Axios para chamadas à API e SWR para carregamento de dados.
- ReactPlayer para reprodução dos vídeos.

## Requisitos

- Node.js 20.9 ou superior.
- npm.
- API do backend em execução ou uma URL pública configurada.

## Executar localmente

No terminal, a partir da raiz do repositório:

```bash
cd frontend
npm ci
```

Crie `frontend/.env.local` com a origem da API:

```dotenv
NEXT_PUBLIC_BASEURL=http://localhost:3001
```

O valor deve conter apenas a origem, sem barra final e sem prefixo `/api`. Essa variável é pública e incorporada ao build do Next.js; não coloque segredos nela.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em [http://127.0.0.1:4000](http://127.0.0.1:4000). Para usar todos os recursos, inicie também o backend conforme as instruções em [`../backend/README.md`](../backend/README.md).

## Rotas principais

- `/`: apresentação pública.
- `/register` e `/login`: cadastro e autenticação.
- `/home`: catálogo para usuários autenticados.
- `/search?name=...`: busca de cursos.
- `/course/[id]`: detalhes e episódios do curso.
- `/course/episode/[id]?courseId=...&episodeId=...`: reprodução do episódio.
- `/profile`: dados pessoais e senha.

As páginas autenticadas usam o token de sessão para chamar a API. O streaming também depende do endpoint de vídeo do backend.

## Scripts

- `npm run dev`: inicia o servidor de desenvolvimento na porta `4000`.
- `npm run build`: gera o build de produção.
- `npm run start`: inicia o build de produção na porta `4000`.
- `npm run lint`: executa o ESLint.

## Deploy na Vercel

Configure `frontend/` como diretório raiz do projeto na Vercel e use o preset Next.js. Cadastre a variável de ambiente `NEXT_PUBLIC_BASEURL` com a origem pública do backend no Render, por exemplo `https://seu-servico.onrender.com`. Faça um novo deploy após alterar essa variável.
