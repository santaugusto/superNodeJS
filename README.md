# Node.js Autenticação e Autorização com MySQL, bcrypt e JWT

Este projeto demonstra como implementar um sistema de autenticação e autorização seguro usando Node.js. O sistema utiliza:

- **MySQL** para o armazenamento dos dados.
- **bcrypt** para a criptografia segura das senhas dos usuários.
- **JWT (JSON Web Token)** para a geração e validação de tokens de acesso (Bearer token).

## Funcionalidades

- **Cadastro de Usuário**:  
  Cria um novo usuário com os campos `id_usuario`, `nome_usuario`, `email_usuario`, `data_cadastro`, `tipo_usuario` e `senha` (armazenada de forma criptografada).

- **Login**:  
  Valida as credenciais do usuário e gera um token de acesso (Bearer token).

- **Rotas Protegidas**:  
  Permite acesso a informações dos usuários somente se um token válido for fornecido.

- **Controle de Acesso Baseado em Função**:  
  Uma rota exclusiva para administradores, que retorna informações detalhadas dos usuários, acessível somente para usuários com `tipo_usuario = 'admin'`.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [dotenv](https://www.npmjs.com/package/dotenv)

## Requisitos

- Node.js instalado (versão recomendada: LTS)
- MySQL instalado e configurado

