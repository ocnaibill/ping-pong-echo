// client/src/SettingsPage.jsx
import React from 'react';

// Um componente simples para a nossa página de configurações
function SettingsPage() {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">Configurações</h1>
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-300 mb-2">Nome de Utilizador</label>
          <input
            type="text"
            id="username"
            className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            placeholder="Seu nome..."
          />
        </div>
        <div>
          <label htmlFor="theme" className="block text-gray-300 mb-2">Tema</label>
          <select
            id="theme"
            className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          >
            <option>Escuro</option>
            <option>Claro (Em breve!)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;