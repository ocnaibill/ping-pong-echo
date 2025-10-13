import React from 'react';

const SettingsBackground = ({ children }) => {
  return (
    // flex items-center justify-center -> centraliza o conteúdo
    // bg-zinc-800 -> uma cor de fundo cinza escura do Tailwind
    <div className="w-screen h-screen bg-zinc-800 flex items-center justify-center p-5">
      {/* O cartão interno */}
      {/* max-w-4xl -> define uma largura máxima */}
      {/* bg-zinc-900 -> cor do cartão, um pouco mais escura */}
      {/* rounded-lg -> cantos arredondados */}
      {/* p-6 -> um padding interno */}
      <div className="w-full max-w-4xl h-[90%] bg-zinc-900 rounded-lg p-6 overflow-y-auto">
        {children}
      </div>
    </div>
  );
};

export default SettingsBackground;