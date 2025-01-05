import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';

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