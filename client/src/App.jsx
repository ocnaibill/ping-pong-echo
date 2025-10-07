import React, { useState } from 'react';
import ChatPage from './ChatPage.jsx';
import SettingsPage from './SettingsPage.jsx';
import SideBar from './components/SideBar.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('chat');

  // Esta função agora é responsável por renderizar não só a página,
  // mas também o layout à volta dela.
  const renderPageAndLayout = () => {
    switch (currentPage) {
      // CASO 1: Página de Chat (com barra lateral)
      case 'chat':
        return (
          // Usamos um Fragment (<>...</>) para agrupar os dois componentes
          <>
            <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow">
              <ChatPage />
            </main>
          </>
        );

      // CASO 2: Caso queira remover a sidebar de uma página é só deletar ela do return
      case 'settings':
        return (
          <>
              <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
               <main className="flex-grow">
            <SettingsPage />
          </main>
</>

        );

      // Caso padrão
      default:
        return (
          <>
            <SideBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-grow">
              <ChatPage />
            </main>
          </>
        );
    }
  };

  return (
    // O div principal agora só define o flexbox.
    // O conteúdo dinâmico é gerado pela função acima.
    <div className="bg-gray-900 text-white flex h-screen font-mono">
      {renderPageAndLayout()}
    </div>
  );
}

export default App;


