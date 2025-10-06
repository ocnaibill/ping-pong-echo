
# 🚀 Chat TCP com Electron, React e Node.js


Este é um aplicativo de chat simples que utiliza um servidor TCP robusto construído com Node.js e uma interface de usuário amigável para desktop criada com Electron, React e Tailwind CSS. O projeto é estruturado em um monorepo para facilitar o desenvolvimento e a manutenção.

# 

# ✨ Tecnologias Principais
- **Servidor (Backend)**: Node.js (`net` module para comunicação TCP).

- **Aplicação Desktop (Frontend)** :

  - **Electron**: Para criar o aplicativo de desktop multiplataforma.

  - **React**: Para construir a interface de usuário de forma declarativa.

   - **Vite**: Como ferramenta de build e servidor de desenvolvimento ultrarrápido.

  - **Tailwind CSS**: Para estilização ágil e moderna.

- **Ferramentas de Desenvolvimento**:

  - **Concurrently**: Para rodar os processos do servidor, frontend e Electron simultaneamente.

  - **Nodemon**: Para reiniciar o servidor automaticamente durante o desenvolvimento.

  - **wait-on**: Para garantir que o servidor Vite esteja pronto antes de iniciar o Electron.

# 

# 📁 Estrutura do Projeto
O projeto utiliza um formato de monorepo, com o código do cliente e do servidor organizados em pastas separadas:

    .
    ├── client/                 # Código do Electron/React (front-end)
    │   ├── src/                # Código-fonte do React (componentes, etc.)
    │   ├── index.html          # Ponto de entrada HTML para o Vite
    │   ├── main.js             # Processo Principal do Electron
    │   └── preload.js          # Script de comunicação segura
    ├── server/                 # Código do Node.js (back-end)
    │   └── index.js            # Servidor TCP
    ├── package.json            # Dependências e scripts do projeto
    └── vite.config.js          # Arquivo de configuração do Vite

# 

# 🛠️ Configuração do Ambiente de Desenvolvimento
Para começar a desenvolver, siga os passos abaixo.

## Pré-requisitos
Antes de tudo, garanta que você tenha os seguintes softwares instalados na sua máquina:

- **Node.js** (versão 18 ou superior)

- **npm** (geralmente instalado junto com o Node.js)

- **Git**

#
## Passos para Instalação
  ### 1. Clone o Repositório
  Abra seu terminal e clone o projeto para sua máquina local:

    git clone https://github.com/ocnaibill/concord.git

 ### 2. Acesse a pasta do projeto
    cd concord

### 3. Instale as Dependências

Este comando irá ler o arquivo `package.json` e instalar todas as bibliotecas e ferramentas necessárias para o projeto funcionar.

    npm install


#
# 🏃‍♂️ Rodando a Aplicação
Com tudo configurado, você pode iniciar o ambiente de desenvolvimento completo com um único comando:
            
    npm run dev

## O que este comando faz?
Ele utiliza a ferramenta `concurrently` para iniciar três processos essenciais em paralelo:

### 1. 💻 Servidor TCP (`npm run start:server`)

- Inicia o backend em Node.js usando `nodemon`.

- Fica escutando por novas conexões de clientes na porta `65432`.

- Reinicia automaticamente a cada alteração nos arquivos da pasta `server/`.

### 2. 🎨 Frontend com Vite (`npm run start:react`)

- Inicia o servidor de desenvolvimento do Vite.

- Compila o código React/JSX em tempo real e o serve em `http://localhost:5173`.

- Habilita o Hot Module Replacement (HMR), que atualiza a interface instantaneamente quando você altera o código do frontend.

### 3. 🖥️ Aplicação Desktop com Electron (`npm run start:electron`)

- Primeiro, ele usa o `wait-on` para esperar até que o servidor do Vite esteja totalmente online.

- Assim que o Vite está pronto, ele inicia o Electron, que abrirá uma janela de desktop.

- Essa janela carregará a URL `http://localhost:5173` para exibir a interface do seu chat.

- Ao final do processo, você verá os logs dos três serviços no seu terminal e a janela do aplicativo Electron deverá aparecer na sua tela, pronta para desenvolvimento.
#
## 📜 Scripts Disponíveis
-    `npm run dev`: Inicia todo o ambiente de desenvolvimento (servidor, Vite e Electron).

-    `npm run start:server`: Inicia apenas o servidor TCP com nodemon.

-    `npm run start:react`: Inicia apenas o servidor de desenvolvimento do Vite.

-    `npm run start:electron`: Inicia apenas a aplicação Electron (requer que o Vite já esteja rodando).
# 
## 🤝 Como Contribuir
 - Faça um **Fork** deste repositório.

- Crie uma nova **Branch**  `git checkout -b feature/sua-feature`.

- Faça suas alterações e **Commits** `git commit -m 'Adiciona nova feature'`.

 - Envie suas alterações para o seu fork `git push origin feature/sua-feature`.

- Abra um **Pull Request**.
