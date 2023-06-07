import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css';
import './index.css';

const container = ReactDOM.createRoot(document.getElementById('root'));

container.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
