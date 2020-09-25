Detalhes:
==========

- Os documentos explicando sobre a arquitetura está no diretório **documents**
- Foi criado o seguinte repositório *https://github.com/tiago123456789/common* onde eu coloquei todo o código que era comum para as aplicações desse repositório. Não é necessário fazer nenhuma configuração o projeto common está sendo usando como uma dependencia nos projetos desse repositório aqui. O motivo disso é evitar duplicidade de código é reusar o máximo possível.

Requisitos:
===========

- Node.js versão 12.18.3
- Npm versão 6.14.6
- Docker 
- Docker compose
- pm2
- serverless framework instalado
- aws cli

Configurando api-gateway para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./api-gateway**
- Executar o comando: **npm install**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **api-gateway** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando api-gateway para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./api-gateway**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **api-gateway** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.



Configurando authorization-authentication para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./authorization-authentication**
- Executar o comando: **npm install**
- Executar o comando: **npm run knex:migrations:run** para rodar as migrations da aplicação.
- Executar o comando: **npm run start knex:seed:run** para rodar as seeds da aplicação.
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **authorization-authentication** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando authorization-authentication para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./authorization-authentication**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **authorization-authentication** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.




Configurando notification para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./notification**
- Executar o comando: **npm install**
- Criar arquivo **.env.json** baseado no arquivo **.env.example.json** na raiz do diretório **notification** com as informações necessárias.
- Configurar **aws-cli** com as credenciais necessários para executar o próximo passo.
- Executar o comando: **npm run deploy** para criar o servidor da aplicação.



Configurando notification para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./notification**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env.json** baseado no arquivo **.env.example.json** na raiz do diretório **notification** com as informações necessárias.
- Configurar **aws-cli** com as credenciais necessários para executar o próximo passo.
- Executar o comando: **npm run deploy** para criar o servidor da aplicação.




Configurando system-a para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./system-a**
- Executar o comando: **npm install**
- Executar o comando: **npm run knex:migrations:run** para rodar as migrations da aplicação.
- Executar o comando: **npm run start knex:seed:run** para rodar as seeds da aplicação.
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-a** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando system-a para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./system-a**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-a** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.




Configurando system-b para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./system-b**
- Executar o comando: **npm install**
- Executar o comando: **npm run knex:migrations:run** para rodar as migrations da aplicação.
- Executar o comando: **npm run start knex:seed:run** para rodar as seeds da aplicação.
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-b** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando system-b para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./system-b**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-b** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.





Configurando system-c para ambiente de desenvolvimento:
----------------------------------------------------------

- Clonar projeto
- Na raiz do projeto execute o comando: **docker-composer up -d** para criar os containers com os banco de dados: mysql, mongodb e redis
- Executar o comando: **cd ./system-c**
- Executar o comando: **npm install**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-c** com as informações necessárias.
- Executar o comando: **npm run start:dev** para criar o servidor da aplicação.

Configurando system-c para ambiente de produção:
----------------------------------------------------------

- Clonar projeto
- Executar o comando: **cd ./system-c**
- Executar o comando: **npm install --only=production**
- Criar arquivo **.env** baseado no arquivo **.env.example** na raiz do diretório **system-c** com as informações necessárias.
- Executar o comando: **npm start** para criar o servidor da aplicação.

