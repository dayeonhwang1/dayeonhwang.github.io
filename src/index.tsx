import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './App.css';
import store from './redux/store';

const container = document.getElementById('root');
if (container) {
    const root = ReactDOM.createRoot(container);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>,
    );
} else {
    console.error('Failed to find the root element');
}