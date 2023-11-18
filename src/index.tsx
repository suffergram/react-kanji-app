import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import './style.css';
import { store } from './state/store';

const container = document.getElementById('root') as HTMLDivElement;
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
