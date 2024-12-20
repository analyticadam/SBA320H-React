// Page to display detailed information about a single Disney character
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router"; // For accessing route parameters

const CharacterDetail = () => {
	const { id } = useParams(); // Get character ID from the route
	const [character, setCharacter] = useState(null); // State for character data

	// Fetch character details when the component loads
	useEffect(() => {
		const fetchCharacter = async () => {
			try {
				const response = await axios.get(
					`https://api.disneyapi.dev/characters/${id}`
				);
				setCharacter(response.data); // Set character data in state
			} catch (error) {
				console.error("Error fetching character:", error);
			}
		};
		fetchCharacter();
	}, [id]);

	return (
		<div>
			{/* Render character details or loading message */}
			{character ? (
				<div>
					<h1>{character.name}</h1>
					{!character.imageUrl ? (
						<h1>No image found</h1>
					) : (
						<img src={character.imageUrl} alt={character.name} />
					)}
					{/* <img src={character.imageUrl} alt={character.name} /> */}
					<p>{character.tvShows.join(", ")}</p>
				</div>
			) : (
				<p>Loading character details...</p>
			)}
		</div>
	);
};

export default CharacterDetail;
