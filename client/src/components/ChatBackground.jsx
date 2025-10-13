import React from 'react';

const ChatBackground = ({ children }) => {
  return (
    // Usamos classes do Tailwind diretamente no JSX!
    // w-screen h-screen -> ocupa toda a largura e altura da tela
    // bg-chat-pattern -> nossa imagem de fundo personalizada
    // bg-repeat -> faz a imagem se repetir
    <div className="w-screen h-screen bg-chat-pattern bg-repeat overflow-y-auto">
      <div className="p-5"> {/* p-5 é um padding */}
        {children}
      </div>
    </div>
  );
};

export default ChatBackground;