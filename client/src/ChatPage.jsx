import React, { useState, useEffect, useRef } from 'react';

function ChatPage() {
  // Estado para controlar se estamos conectados ou não.
  const [isConnected, setIsConnected] = useState(false);
  // Estado para armazenar o valor do campo de input.
  const [message, setMessage] = useState('');
  // Estado para armazenar todas as mensagens do chat.
  const [chatMessages, setChatMessages] = useState([]);
  // Estado para mensagens de erro ou status.
  const [statusMessage, setStatusMessage] = useState('Pronto para conectar.');

  // Ref para o elemento da área de chat, para rolar automaticamente para baixo.
  const chatAreaRef = useRef(null);

  // useEffect é um hook do React que executa efeitos colaterais.
  // Este será executado uma única vez quando o componente for montado.
  useEffect(() => {
    // Configura o "ouvinte" para receber dados do servidor TCP (via main.js).
    window.api.onTcpData((data) => {
      // Adiciona a nova mensagem recebida à lista de mensagens.
      setChatMessages((prevMessages) => [...prevMessages, `Servidor: ${data.trim()}`]);
    });

    // Configura o "ouvinte" para o status da conexão.
    window.api.onTcpStatus((status) => {
      setIsConnected(status.connected);
      if (status.connected) {
        setStatusMessage('Conectado ao servidor!');
      } else {
        setStatusMessage(status.error ? `Erro: ${status.error}` : 'Desconectado.');
      }
    });

    // Função de limpeza: remove os "ouvintes" quando o componente for desmontado.
    return () => {
      window.api.removeAllListeners('tcp-data');
      window.api.removeAllListeners('tcp-status');
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez.

  // Efeito para rolar a área do chat para a última mensagem.
  useEffect(() => {
    if (chatAreaRef.current) {
      chatAreaRef.current.scrollTop = chatAreaRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Função para lidar com o clique no botão de conectar.
  const handleConnect = () => {
    setStatusMessage('Tentando conectar...');
    window.api.tcpConnect(); // Chama a função exposta no preload.js
  };
  
  // Função para lidar com o envio de uma mensagem.
  const handleSendMessage = (e) => {
    e.preventDefault(); // Impede o formulário de recarregar a página.
    if (message.trim() && isConnected) {
      window.api.tcpSend(message); // Envia a mensagem.
      setChatMessages((prev) => [...prev, `Você: ${message}`]); // Adiciona à UI localmente.
      setMessage(''); // Limpa o campo de input.
    }
  };

  // Aqui começa a renderização da interface com JSX e classes do Tailwind CSS.
  // Note que agora o wrapper principal tem `flex-col h-full` para ocupar
  // o espaço que o componente `App.jsx` (router) lhe dá.
  return (
    <div className="flex flex-col h-full p-4">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-cyan-400">Chat TCP</h1>
        <p className="text-gray-400">{statusMessage}</p>
      </header>

      {/* Botão de Conectar */}
      {!isConnected && (
        <div className="mb-4">
          <button
            onClick={handleConnect}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded transition-colors"
          >
            Conectar ao Servidor
          </button>
        </div>
      )}

      {/* Área de Mensagens */}
      <div
        ref={chatAreaRef}
        className="flex-grow bg-gray-800 rounded-lg p-4 mb-4 overflow-y-auto"
      >
        {chatMessages.map((msg, index) => (
          <p key={index} className="mb-1">
            {msg}
          </p>
        ))}
      </div>

      {/* Formulário de Envio de Mensagem */}
      <form onSubmit={handleSendMessage} className="flex">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={isConnected ? "Digite sua mensagem..." : "Conecte-se para enviar mensagens"}
          disabled={!isConnected}
          className="flex-grow bg-gray-700 text-white rounded-l-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          disabled={!isConnected}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-r-lg disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

export default ChatPage;
