// Home page of the app
import React, { useState, useEffect } from "react";
import axios from "axios"; // For making API requests
import DisneyCard from "../components/DisneyCard"; // Import DisneyCard component
import TVBackground from "../components/TVBackground"; // Import TVBackground component

const Home = () => {
	// State to hold character data
	const [characters, setCharacters] = useState([]);
	// State to track loading status
	const [loading, setLoading] = useState(true);

	// Fetch data from the Disney API when the component loads
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("https://api.disneyapi.dev/character");
				setCharacters(response.data.data); // Set character data in state
			} catch (error) {
				console.error("Error fetching data:", error);
			} finally {
				setLoading(false); // Set loading to false once data is fetched
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			{/* Render the TV background */}
			<TVBackground />
			<div className="content">
				<h1>Disney Character Explorer</h1>
				{/* Display loading message or character cards */}
				{loading ? (
					<p>Loading characters...</p>
				) : (
					<div className="character-list">
						{/* Map over character data and render a card for each */}
						{characters.map((character) => (
							<DisneyCard key={character._id} character={character} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Home;
