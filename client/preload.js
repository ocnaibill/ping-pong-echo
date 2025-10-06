// client/preload.js

// 'contextBridge' é um módulo do Electron que permite expor APIs de forma segura
// do processo principal (ambiente Node.js) para o processo de renderização (o site/React).
// 'ipcRenderer' é usado para enviar mensagens do processo de renderização para o principal.
const { contextBridge, ipcRenderer } = require('electron');

// Expomos um objeto global 'api' na janela do React ('window.api').
// Isso evita poluir o escopo global e garante que apenas as funções
// que definimos aqui estarão disponíveis para o React.
contextBridge.exposeInMainWorld('api', {
    // Função que o React chamará para pedir ao processo principal para se conectar.
    tcpConnect: () => ipcRenderer.send('tcp-connect'),

    // Função para enviar uma mensagem. O React passa a mensagem como argumento.
    tcpSend: (message) => ipcRenderer.send('tcp-send', message),
    
    // Função para registrar um "ouvinte" de dados. O React passará uma função (callback)
    // que será executada toda vez que o processo principal enviar dados do TCP
    // através do canal 'tcp-data'.
    onTcpData: (callback) => ipcRenderer.on('tcp-data', (event, data) => callback(data)),

    // Função para ouvir mudanças no status da conexão.
    onTcpStatus: (callback) => ipcRenderer.on('tcp-status', (event, status) => callback(status)),

    // É uma boa prática fornecer uma maneira de remover os ouvintes
    // para evitar vazamentos de memória em componentes React complexos.
    removeAllListeners: (channel) => ipcRenderer.removeAllListeners(channel),
});