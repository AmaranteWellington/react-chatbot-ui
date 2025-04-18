const Message = ({ sender, text }) => {
  // Verifica se a mensagem é do usuário ou do "Bot"
  const isUser = sender === 'Você';

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: isUser ? 'flex-end' : 'flex-start', // Alinha direita ou esquerda
      }}
    >
      <div
        style={{
          maxWidth: '70%',
          padding: '10px',
          borderRadius: '16px',
          backgroundColor: isUser ? '#e53935' : '#f1f1f1', // Vermelho para você, cinza claro para o bot
          color: isUser ? '#fff' : '#000', // Texto branco no vermelho, preto no fundo claro
          alignSelf: 'flex-start',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        }}
      >
        <p style={{ margin: 0, fontWeight: 'bold', fontSize: '14px' }}>
          {sender}
        </p>
        <p style={{ margin: 0, fontSize: '16px' }}>{text}</p>
      </div>
    </div>
  );
};

export default Message;
