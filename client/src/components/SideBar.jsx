import React from 'react';

// Recebemos `currentPage` e `setCurrentPage` como props do componente pai (App.jsx)
function SideBar({ currentPage, setCurrentPage }) {
  return (
    <aside className="w-48 bg-gray-800 p-4 flex flex-col">
      <h2 className="text-xl font-bold text-white mb-6">Menu</h2>
      <nav className="flex flex-col space-y-2">
        <button
          onClick={() => setCurrentPage('chat')}
          className={`px-3 py-2 text-left rounded ${currentPage === 'chat' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
        >
          Chat
        </button>
        <button
          onClick={() => setCurrentPage('settings')}
          className={`px-3 py-2 text-left rounded ${currentPage === 'settings' ? 'bg-cyan-500 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
        >
          Configurações
        </button>
      </nav>
    </aside>
  );
}

export default SideBar;
