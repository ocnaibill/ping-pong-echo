import React from 'react';

function ChatMessage({ message }) {
  const isUser = message.sender === 'user';
  const senderName = isUser ? 'Você' : 'Servidor';

  return (
    // Contêiner principal que alinha a bolha
    <div className={`flex w-full my-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      
      {/* A bolha da mensagem com as novas restrições de largura */}
      <div
        className={`px-4 py-2 text-white rounded-[45px] flex flex-col
                   ${isUser ? 'bg-[#7F7E7E]' : 'bg-[#7F7E7E]'}
                   max-w-[316px]`}
      >
        {/* Nome do Remetente */}
        <p className="text-sm font-bold opacity-80 mb-1">
          {senderName}
        </p>

        {/* Texto da Mensagem */}
        <p className="break-words">
          {message.text}
        </p>

        {message.time && (
          <p className="text-xs opacity-70 mt-2 self-end">
            {message.time}
          </p>
        )}
      </div>
    </div>
  );
}

export default ChatMessage;