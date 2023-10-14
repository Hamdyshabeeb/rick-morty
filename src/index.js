import ReactDom from 'react-dom/client';
import React from 'react';
import List from './components/List';

function App() {
	return (
		<div>
			<h1> rick and morty</h1>
			<List />
		</div>
	);
}

const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
