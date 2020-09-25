Requisitos:
===========

- Node.js versão 12.18.3
- Npm versão 6.14.6
- Docker 
- Docker compose
- pm2

Configurando api-gateway para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./api-gateway**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **api-gateway** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando api-gateway para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./api-gateway**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **api-gateway** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.
