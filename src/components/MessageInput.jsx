import { useState } from 'react';

const MessageInput = ({ onSend }) => {
  const [text, setText] = useState(''); // Guarda o que o usuário digita

  // Envia a mensagem quando o botão é clicado ou Enter é pressionado
  const handleSend = () => {
    if (text.trim() === '') return; // Não envia se estiver vazio

    onSend(text); // Chama a função recebida do ChatWindow
    setText(''); // Limpa o campo após o envio
  };

  // Se apertar Enter, envia a mensagem
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        padding: '10px',
        borderTop: '1px solid #ccc',
        backgroundColor: '#fff',
      }}
    >
      <input
        type="text"
        placeholder="Digite sua mensagem..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyPress}
        style={{
          flex: 1,
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid #ccc',
          outline: 'none',
          fontSize: '16px',
        }}
      />
      <button
        onClick={handleSend}
        style={{
          marginLeft: '10px',
          padding: '10px 16px',
          backgroundColor: '#e53935', // Vermelho
          color: '#fff',
          border: 'none',
          borderRadius: '20px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        Enviar
      </button>
    </div>
  );
};

export default MessageInput;
