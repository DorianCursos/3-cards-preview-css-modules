import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/variables.css';
import './styles/normalize.css';
import './styles/index.css';

const container = document.getElementById('root');

createRoot(container).render(<App />);
