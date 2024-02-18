import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import ModalProvider from './context/modal.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <ModalProvider>
                <App />
            </ModalProvider>
        </BrowserRouter>
    </React.StrictMode>,
);
