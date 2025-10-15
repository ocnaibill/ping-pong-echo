// client/src/App.jsx
import React, { useState, useEffect } from 'react';

import ChatPage from './ChatPage.jsx';
import SettingsPage from './SettingsPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('chat');


  const [isConnected, setIsConnected] = useState(false);
  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [statusMessage, setStatusMessage] = useState('Pronto para conectar.');

  // O useEffect que configura os listeners do Electron agora vive aqui.
  // Ele só será executado UMA VEZ quando o App montar, e nunca mais será destruído.
  useEffect(() => {
    // Listener para dados recebidos
    window.api.onTcpData((data) => {
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'server', text: data.trim(), time: timestamp },
      ]);
    });

    // Listener para o status da conexão
    window.api.onTcpStatus((status) => {
      setIsConnected(status.connected);
      if (status.connected) {
        setStatusMessage('Conectado ao servidor!');
      } else {
        setStatusMessage(status.error ? `Erro: ${status.error}` : 'Desconectado.');
      }
    });

    // A função de limpeza só será chamada se o App inteiro fechar.
    return () => {
      window.api.removeAllListeners('tcp-data');
      window.api.removeAllListeners('tcp-status');
    };
  }, []);

  // Funções para manipular o estado do chat
  const handleConnect = () => {
    setStatusMessage('Tentando conectar...');
    window.api.tcpConnect();
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && isConnected) {
      window.api.tcpSend(message);
      const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setChatMessages((prev) => [...prev, { sender: 'user', text: message, time: timestamp }]);
      setMessage(''); 
    }
  };
  

  const renderPage = () => {
    switch (currentPage) {
      case 'chat':
        return (
          <ChatPage
            setCurrentPage={setCurrentPage}
            isConnected={isConnected}
            message={message}
            setMessage={setMessage}
            chatMessages={chatMessages}
            statusMessage={statusMessage}
            handleConnect={handleConnect}
            handleSendMessage={handleSendMessage}
          />
        );

      case 'settings':
        return (
          <SettingsPage setCurrentPage={setCurrentPage} />
        );

      default:
        return <div>Página não encontrada</div>;
    }
  };

  return (
    <div className="bg-gray-900 text-white h-screen font-mono">
      {renderPage()}
    </div>
  );
}

export default App;