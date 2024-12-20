// Home page of the app
import React, { useState, useEffect } from "react"; // Import React and hooks
import axios from "axios"; // Import Axios for API requests
import DisneyCard from "../components/DisneyCard"; // Import DisneyCard component
import TVBackground from "../components/TVBackground"; // Import TVBackground component

// Home component to display Disney characters inside the TV screen
const Home = () => {
	// State to hold the filtered list of Disney characters with images
	const [characters, setCharacters] = useState([]);
	// State to store the currently displayed character
	const [selectedCharacter, setSelectedCharacter] = useState(null);
	// State to track the loading status
	const [loading, setLoading] = useState(true);

	// Fetch Disney characters when the component loads
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch the list of characters from the API
				const response = await axios.get("https://api.disneyapi.dev/character");
				const characterList = response.data.data; // Extract character list from response

				// Filter out characters without valid images
				const charactersWithImages = characterList.filter(
					(character) => character.imageUrl
				);

				// Store filtered characters in state
				setCharacters(charactersWithImages);

				// Automatically select the first character if available
				if (charactersWithImages.length > 0) {
					setSelectedCharacter(charactersWithImages[0]);
				}
			} catch (error) {
				// Log any errors during the API request
				console.error("Error fetching characters:", error);
			} finally {
				// Set loading to false after data fetching is complete
				setLoading(false);
			}
		};
		fetchData();
	}, []); // Run this effect only once when the component mounts

	// Function to select a random character
	const selectRandomCharacter = () => {
		if (characters.length > 0) {
			// Randomly select a character from the filtered list
			const randomCharacter =
				characters[Math.floor(Math.random() * characters.length)];
			setSelectedCharacter(randomCharacter);
		}
	};

	// Function to select a character based on preference (via ID)
	const selectCharacterById = (characterId) => {
		// Find the character matching the given ID
		const character = characters.find((c) => c._id === characterId);
		setSelectedCharacter(character); // Update the selected character state
	};

	return (
		<div>
			{/* Render the TV background with content */}
			<TVBackground>
				{/* Show loading message while data is being fetched */}
				{loading ? (
					<p>Loading character...</p>
				) : (
					// Render the selected character inside the TV screen
					selectedCharacter && <DisneyCard character={selectedCharacter} />
				)}

				{/* Button for selecting a random character */}
				<div className="button-container">
					<button onClick={selectRandomCharacter}>Load Random Character</button>
				</div>
			</TVBackground>

			{/* Controls for selecting characters */}
			<div className="controls">
				{/* Dropdown for selecting a character by name */}
				<select
					onChange={(e) => selectCharacterById(e.target.value)}
					value={selectedCharacter ? selectedCharacter._id : ""}
				>
					<option value="" disabled>
						Select a character
					</option>
					{/* Populate dropdown options with characters that have images */}
					{characters.map((character) => (
						<option key={character._id} value={character._id}>
							{character.name}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Home;
