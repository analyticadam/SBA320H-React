// Home page of the app
import React, { useState, useEffect } from "react"; // Import React and hooks
import axios from "axios"; // Import Axios for making API requests
import DisneyCard from "../components/DisneyCard"; // Import DisneyCard component
import TVBackground from "../components/TVBackground"; // Import TVBackground component

// Home component to display the main page with Disney characters
const Home = () => {
	// State to hold the array of Disney characters
	const [characters, setCharacters] = useState([]);
	// State to track whether the data is being loaded
	const [loading, setLoading] = useState(true);

	// Fetch data from the Disney API when the component loads
	useEffect(() => {
		const fetchData = async () => {
			try {
				// Fetch the list of Disney characters from the API
				const response = await axios.get("https://api.disneyapi.dev/character");
				// Update the state with the character data
				setCharacters(response.data.data);
			} catch (error) {
				// Log any errors encountered during the API request
				console.error("Error fetching data:", error);
			} finally {
				// Set the loading state to false once data fetching is complete
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			{/* Render the TV background with dynamic content passed as children */}
			<TVBackground>
				{/* Display loading message if data is still being fetched */}
				{loading ? (
					<p>Loading characters...</p>
				) : (
					<div className="character-list">
						{/* Map over the character data and render a DisneyCard for each character */}
						{characters.map((character) => (
							<DisneyCard key={character._id} character={character} />
						))}
					</div>
				)}
			</TVBackground>
		</div>
	);
};

export default Home;
