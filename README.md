<div align="center">
  <h1>Product Service — Microservice</h1>
  <h4>
    <strong>Status do projeto: </strong> <i>Incompleto</i> 🤓 🤓 🤓
  </h4>
  <!-- <a href="https://wakatime.com/badge/github/joaoo-vittor/account-service"><img src="https://wakatime.com/badge/github/joaoo-vittor/account-service.svg"></a> -->
</div>

----

## Objetivo do projeto

Criar um microsserviço utilizando o padrão *MVC*, o serviço é responsavel por *registrar um produto*, por fazer *update de um produto*, por *deletar um produto*, por *mostrar varios ou um produto(s)*. Mas também, recebe dados compartilhados de um serviço de gerenciamento de usuários feito com `Python`. O compartilhamento de dados é feito através do [CloudAMQP](https://www.cloudamqp.com/), o qual é um cluster RabbitMQ.

> Observação: O projeto ainda está em produção, sendo assim pode ocorrer mudanças.

<!--
## Documentação das rotas

> Documentação feita usando `swagger`: [Link Documentação](https://ecommerce-account-service-jvbs.herokuapp.com/api/v1/doc/) -->

### Configurar variáveis de ambiente

#### 1° Passo

> Crie um arquivo .env na raiz do projeto

```
  /src
    /models
    /controllers
    ...
  .env
  ...
```

#### 2° Passo

```
PORT=3001
DATABASE_HOST=db
DATABASE_PORT=3306
DATABASE_USERNAME=root
DATABASE_PASSWORD=root
DATABASE=product
PRIVATE_KEY=<private key to generate token>
AMQP_URL=<Sua AMQP URL>
```

> Crie um cluster RabbitMQ, na plataforma [CloudAMQP](https://www.cloudamqp.com/).


### Rodar o serviço

> Observação: É necessário ter o `docker` e o `docker-compose` instalado no seu computador.

🔗 Instalar docker-compose: [Link](https://docs.docker.com/compose/install/)

🔗 Instalar o docker: [Link](https://docs.docker.com/get-docker/)

```
docker-compose up
```
