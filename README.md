# Chat em Tempo Real - Node.js com Arquitetura MVC

## 📋 Sobre o Projeto

Este é um projeto de **chat em tempo real**, desenvolvido utilizando **Node.js** e implementado com a arquitetura **MVC (Model-View-Controller)**. O objetivo principal do sistema é oferecer comunicação instantânea entre usuários em uma interface simples e funcional.

O projeto utiliza as bibliotecas **Express**, **Body-parser**, **Consign**, entre outras, para fornecer uma estrutura modular, escalável e fácil de manter.

---

## ✨ Funcionalidades

- Comunicação em tempo real entre usuários.
- Interface amigável e responsiva.
- Organização do código seguindo a arquitetura **MVC**.
- Integração com **Socket.IO** para funcionalidades em tempo real.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Plataforma principal para o desenvolvimento backend.
- **Express**: Framework para criação e gerenciamento de rotas.
- **Socket.IO**: Comunicação em tempo real.
- **Body-parser**: Middleware para parseamento de requisições.
- **Consign**: Carregamento automático de módulos e organização do projeto.
- **JavaScript**: Lógica e interatividade.
- **HTML/CSS**: Interface básica do chat.

---

## 📂 Estrutura do Projeto

A estrutura do projeto segue a arquitetura MVC (Model-View-Controller), garantindo organização e escalabilidade.

```plaintext
realtime-chat-app/
├── app/
│   ├── controllers/      # Lógica de controle
│   ├── models/           # Modelos de dados
│   ├── routes/           # Definição de rotas
│   └── views/            # Interface do usuário (HTML)
├── public/               # Arquivos estáticos (CSS, JS)
├── node_modules/         # Dependências instaladas via NPM
├── server.js             # Arquivo principal para execução do servidor
├── package.json          # Dependências e metadados do projeto
└── README.md             # Documentação do projeto
```

# 🚀 Como Executar o Projeto

## Pré-requisitos
* Node.js instalado na máquina.

# Passo a Passo
1. Clone o Repositório
   ```
     git clone https://github.com/sandoelio/realtime-chat-app.git
   ```
2. Navegue até o diretório do projeto
3. Instale as dependências
   . npm install
   . npm init
   . npm install express --save
   . npm install ejs --save
   . npm install consign --save
   . npm install body-parser --save
   . npm install express-validator --save
   . npm install socket.oi@2.0.3 --save
   
# Iniciar
```
nodemon app
```
## 📧 Contato

* Autor: Sandoelio Silva
* Email: sandoelio@hotmail.com
* LinkedIn: [Sandoelio Silva](https://www.linkedin.com/in/sandoelio-silva/)
