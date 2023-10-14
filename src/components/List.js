import Character from './Character';
import { useState, useEffect } from 'react';

export default function List() {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function getCharacters(url = '') {
			try {
				const response = await fetch(url);
				const { results } = await response.json();
				setLoading(false);
				setCharacters(results);
			} catch (error) {
				setLoading(false);
				setError(error);
			}
		}

		getCharacters('https://rickandmortyapi.com/api/character');
	}, []);

	return (
		<div>
			<h1>Characters</h1>
			{loading
				? 'Loading....'
				: error
				? error.message
				: characters.map((character) => (
						<Character key={character.id} character={character} />
				  ))}
		</div>
	);
}
