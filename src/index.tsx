import React from 'react';
import ReactDOM from 'react-dom/client';

// Простейший компонент без зависимостей
function App() {
  console.log('App is rendering!'); // Это должно появиться в консоли
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
      <h1>🚀 Kanji App is Working!</h1>
      <p>If you see this, everything is working correctly.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

console.log('About to render App...'); // Должно появиться в консоли
root.render(<App />);
console.log('App rendered!'); // Должно появиться в консоли