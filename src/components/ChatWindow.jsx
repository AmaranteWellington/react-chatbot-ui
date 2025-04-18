import { useState } from 'react';
import Message from './Message';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  // Lista de mensagens do chat
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Bot', text: 'Olá! Como posso te ajudar?' },
  ]);

  // Quando o usuário envia uma nova mensagem
  const handleSend = (text) => {
    const newMessage = {
      id: messages.length + 1,
      sender: 'Você',
      text: text,
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div
      style={{
        width: '400px',
        height: '600px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff', // fundo branco
        boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      }}
    >
      {/* Área das mensagens */}
      <div
        style={{
          flex: 1,
          padding: '10px',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}
      >
        {messages.map((msg) => (
          <Message key={msg.id} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      {/* Campo para digitar mensagens */}
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
