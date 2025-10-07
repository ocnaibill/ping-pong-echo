// client/src/App.jsx
import React, { useState } from 'react';
import ChatPage from './ChatPage'; // Importa a página de Chat
import SettingsPage from './SettingsPage'; // Importa a página de Configurações

function App() {
  // 1. Criamos um estado para saber qual página está ativa
  const [currentPage, setCurrentPage] = useState('chat'); // Começa na página 'chat'

  // 2. Função para renderizar a página correta com base no estado
  const renderPage = () => {
    switch (currentPage) {
      case 'chat':
        return <ChatPage />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <ChatPage />; // Página padrão
    }
  };

  return (
    <div className="bg-gray-900 text-white flex flex-col h-screen font-mono">
      {/* 3. Criamos uma barra de navegação simples */}
      <nav className="flex bg-gray-800 p-2 space-x-4">
        <button
          onClick={() => setCurrentPage('chat')}
          className={`px-3 py-1 rounded ${currentPage === 'chat' ? 'bg-cyan-500' : 'hover:bg-gray-700'}`}
        >
          Chat
        </button>
        <button
          onClick={() => setCurrentPage('settings')}
          className={`px-3 py-1 rounded ${currentPage === 'settings' ? 'bg-cyan-500' : 'hover:bg-gray-700'}`}
        >
          Configurações
        </button>
      </nav>

      {/* 4. O conteúdo da página ativa é renderizado aqui */}
      <main className="flex-grow">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;