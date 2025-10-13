import React, { useState } from 'react';

// Suas importações de página
import SettingsPage from './SettingsPage.jsx';
import ChatPage from './ChatPage.jsx';
import SideBar from './SideBar.jsx';

// Nossas importações de fundo
import ChatBackground from './components/ChatBackground.jsx';
import SettingsBackground from './components/SettingsBackground.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('chat');

  // Esta função agora decide qual layout COMPLETO renderizar
  const renderPageAndLayout = () => {
    switch (currentPage) {
      // CASO 1: Página de Chat
      case 'chat':
        return (
          // O ChatBackground agora "envelopa" todo o layout do chat
          <ChatBackground>
            <div className="flex w-full h-full"> {/* Container flex para organizar a sidebar e o conteúdo */}
              <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
              
              {/* O conteúdo principal da tela de chat */}
              <main className="flex-grow"> {/* 'flex-grow' faz este elemento ocupar o espaço restante */}
                <ChatPage />
              </main>
            </div>
          </ChatBackground>
        );

      // CASO 2: Página de Configurações (ADICIONADO)
      case 'settings':
        return (
          // O SettingsBackground agora "envelopa" a página de configurações
          <SettingsBackground>
            <SettingsPage />
            {/* Adicionamos um botão simples para voltar, você pode integrar isso na sua SettingsPage */}
            <button 
              onClick={() => setCurrentPage('chat')} 
              className="mt-4 bg-teal-500 text-white py-2 px-4 rounded-full"
            >
              Voltar para o Chat
            </button>
          </SettingsBackground>
        );

      // Caso padrão, para evitar erros
      default:
        return <div>Página não encontrada</div>;
    }
  };

  // O componente App AGORA RETORNA o resultado da função
  // A função não estava sendo chamada antes
  return (
    <div>
      {renderPageAndLayout()}
    </div>
  );
}

export default App;