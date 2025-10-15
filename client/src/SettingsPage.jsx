// client/src/SettingsPage.jsx
import React from 'react';

function SettingsPage() {
  return (
    // Fundo da página inteira (permanece o mesmo, como no chat)
    <div className="min-h-screen relative bg-[#353333] 
                   before:content-[''] before:absolute before:inset-0 
                   before:bg-imagemchat before:bg-repeat before:invert before:opacity-20">
      
      <div className="relative z-10 p-4">

        <h1 className="text-3xl font-bold text-white mb-4">Configurações</h1>
        
        {/* <<-- ALTERAÇÃO AQUI: Fundo do card agora é preto -->> */}
        <div className="bg-black rounded-lg p-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-white mb-2">Nome de Utilizador</label>
            <input
              type="text"
              id="username"
              className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Seu nome..."
            />
          </div>
          <div>
            <label htmlFor="theme" className="block text-white mb-2">Tema</label>
            <select
              id="theme"
              className="w-full bg-gray-700 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              <option>Escuro</option>
              <option>Claro (Em breve!)</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SettingsPage;