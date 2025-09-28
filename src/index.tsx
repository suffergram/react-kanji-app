import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div
      style={{
        padding: '40px',
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        borderRadius: '10px',
        margin: '20px',
      }}
    >
      <h1>✅ React + Webpack Works!</h1>
      <p>Your build configuration is correct.</p>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
