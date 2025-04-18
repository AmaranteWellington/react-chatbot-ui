import ChatWindow from './components/ChatWindow'; // Importa o chat

function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', // Centraliza na horizontal
        alignItems: 'center', // Centraliza na vertical
        backgroundColor: '#fcecec', // Um tom claro de vermelho como fundo da tela
      }}
    >
      <ChatWindow /> {/* Mostra o componente do chat */}
    </div>
  );
}

export default App;
