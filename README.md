# Downloading and Uploading Books

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Início Rápido](#2-início-rápido)
  - [Instalando Dependências](#21-instalando-dependências)
  - [Variáveis de Ambiente](#22-variáveis-de-ambiente)
  - [Migrations](#23-migrations)

---

## 1. Visão Geral

Projeto Back-end voltado tanto para o Administrador do site quanto para o usuário. A ideia é que o usuário possa fazer download de diversos E-books de sua escolha,
então o site segue na ideia de divulgação de E-books onde os usuários do mesmo possam fazer downloads dos E-books. O administrador do site poderá fazer: Login, cadastro de novos livros, atualização e deleção dos mesmos.

Logo abaixo temos a lista de tecnologias usadas:

- [NodeJS](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)
- [Jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [Jest](https://jestjs.io/pt-BR/)
- [Supertest](https://www.npmjs.com/package/supertest)

---

## 2. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

### 2.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
cp .env.example .env
```

Configure suas variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

### 2.3. Migrations

Execute as migrations com o comando:

```
npx prisma migrate dev
```

### 2.4. Visualização das tabelas

Execute o seguinte código para ter acesso as tabelas:

```
npx prisma studio
```
