import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const getElement = (name: string) => {
  let item = document.getElementById(name)!;

  return item;
};

let containers = {
  root: document.getElementById('root')!,
};



let layout = {
  header: "#header",
  content: "#content"
}


// localStorage.key(1)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
