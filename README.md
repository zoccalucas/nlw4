# 🚀 NLW4

Projeto inspirado na 4° edição da NLW (Next Level Week), promovido pela Rocketseat.

## 👨‍💻 Projeto:

API de NPS (Net Promoter Score), uma metodologia de satisfação de clientes desenvolvida para avaliar o grau de fidelidade dos clientes de qualquer perfil de empresa. A API possuí sistema de cadastro de usuários, cadastro de pesquisas, envio de email com pesquisas e cálculo do NPS. Também, foi utilizado o Jest para realização dos testes automatizados da aplicação e o Nodemailer em conjunto do Handlebars para o envio de templates de emails.

Nesta API é possível realizar as seguintes funções:

- Cadastrar usuários;
- Cadastrar pesquisas;
- Listar as pesquisas;
- Enviar emails com as pesquisas para os usuários cadastrados;
- Calcular o NPS das pesquisas.

Testes:

- Testes automatizados com o Jest.

## ⚙ Tecnologias utilizadas:

Para a criação desta API, foram usadas às seguintes dependências:

- [Express](https://expressjs.com/pt-br/);
- [TypeScript](https://www.typescriptlang.org/);
- [TypeORM](https://typeorm.io/#/);
- [SQLite](https://www.sqlite.org/index.html);
- [Jest](https://jestjs.io/);
- [Nodemailer](https://nodemailer.com/about/); 
- [Handlebars](https://handlebarsjs.com/); 
- [Yup](https://www.npmjs.com/package/yup);

Foi instalado e configurado o [Prettier](https://prettier.io/) para manter o código limpo e padronizado.

## 📁 Como executar o projeto:

1. Instale o [Yarn](https://yarnpkg.com/);
2. Instale o [NodeJs](https://nodejs.org/en/);
3. Clone o repositório;
4. Acesse a pasta do projeto e execute o comando `yarn` para instalar todas às dependências;
5. Rode `yarn typeorm migration:run` para criar as tabelas do banco de dados;
6. Assim que a instalação terminar, digite o comando `yarn dev`;

   _OBS: A API estará rodando na porta 3333._


