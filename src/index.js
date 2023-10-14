import ReactDom from 'react-dom/client';
import React from 'react';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<div className="container">
			<nav className="navbar sticky-top navbar-light bg-dark px-3">
				<h1 className="navbar-brand text-light"> Rick and morty</h1>
			</nav>
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
