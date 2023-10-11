import ReactDom from 'react-dom/client';
import React from 'react';

function App() {
	return <h1> rick and morty</h1>;
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
