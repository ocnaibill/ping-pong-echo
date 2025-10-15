import React, { useState } from 'react';
import UserIcon from './assets/UserIcon.svg';
import ThemeIcon from './assets/ThemeIcon.svg';
import AboutIcon from './assets/AboutIcon.svg';
import BackButtonIcon from './assets/backButton.svg';

function SettingsPage({ setCurrentPage }) {
  // Estado para controlar qual aba de configuração está ativa
  const [activeTab, setActiveTab] = useState('nome');

  // Função para renderizar o conteúdo com base na aba ativa
  const renderActiveContent = () => {
    switch (activeTab) {
      case 'nome':
        return (
          <div>
            <label htmlFor="username" className="block text-white mb-2 font-semibold">Nome de Utilizador</label>
            <p className="text-sm text-gray-400 mb-4">Este será o nome exibido no chat para outros usuários.</p>
            <input
              type="text"
              id="username"
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              placeholder="Seu nome..."
            />
          </div>
        );
      case 'tema':
        return (
          <div>
            <label htmlFor="theme" className="block text-white mb-2 font-semibold">Tema</label>
             <p className="text-sm text-gray-400 mb-4">Personalize a aparência do aplicativo.</p>
            <select
              id="theme"
              className="w-full bg-gray-700 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none"
            >
              <option>Escuro</option>
              <option disabled>Claro (Em breve!)</option>
            </select>
          </div>
        );
      case 'sobre':
        return (
          <div>
            <h2 className="text-xl font-bold text-white mb-2">Sobre o Concord</h2>
            <p className="text-gray-300">
              Versão 1.0.0 <br />
              Um aplicativo de chat simples e eficiente construído com Electron e React.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  // Componente reutilizável para os botões da sidebar
  const SidebarButton = ({ tabName, label, icon }) => (
    <button
      onClick={() => setActiveTab(tabName)}
      className={`w-full flex items-center gap-3 text-left px-4 py-3 rounded-lg transition-colors duration-200 ${
        activeTab === tabName
          ? 'bg-cyan-600 text-white shadow-lg'
          : 'text-gray-300 hover:bg-gray-700/50'
      }`}
    >
      <img src={icon} alt={label} className="w-5 h-5" />
      <span className="font-semibold">{label}</span>
    </button>
  );

  return (
    // Fundo da página inteira
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-[#353333] 
                   before:content-[''] before:absolute before:inset-0 
                   before:bg-imagemchat before:bg-repeat before:invert before:opacity-20">
      
      {/* Container principal que agrupa a sidebar e o conteúdo */}
      <div className="relative z-10 flex bg-black/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
        
        {/* === Sidebar de Navegação === */}
        <aside className="p-4 border-r border-white/10 w-56">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => setCurrentPage('chat')}
              className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
              title="Voltar para o Chat"
            >
              <img src={BackButtonIcon} alt="Voltar" className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-bold text-white">Configurações</h2>
          </div>
          <nav className="flex flex-col gap-2">
            <SidebarButton tabName="nome" label="Nome" icon={UserIcon} />
            <SidebarButton tabName="tema" label="Tema" icon={ThemeIcon} />
            <SidebarButton tabName="sobre" label="Sobre" icon={AboutIcon} />
          </nav>
        </aside>

        {/* === Container de Conteúdo Principal === */}
        <main className="relative min-w-[542px] min-h-[488px]">
          {/* Camada superior (Header) */}
          <header className="absolute top-0 left-0 right-0 min-h-[83px] bg-[#514F4F]/85 flex items-center px-8">
            <h1 className="text-2xl font-bold text-white">
              {/* O título muda dinamicamente */}
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </header>

          {/* Área onde o conteúdo dinâmico é renderizado */}
          <div className="p-8 pt-[110px]">
            {renderActiveContent()}
          </div>
        </main>

      </div>
    </div>
  );
}

export default SettingsPage;

