// DisneyCard.jsx
import React from "react"; // Import React library

// Component to render a card for a single Disney character
const DisneyCard = ({ character }) => {
	// Ensure the component does not render if the character has no image
	if (!character.imageUrl) return null;

	return (
		<div className="disney-card">
			{/* Display the character's image */}
			<img src={character.imageUrl} alt={character.name} />

			{/* Display the character's name */}
			<h3>{character.name}</h3>

			{/* Display the character's movies if available */}
			{character.films && character.films.length > 0 && (
				<div>
					<h4>Movies:</h4>
					<ul>
						{character.films.map((film, index) => (
							<li key={index}>{film}</li>
						))}
					</ul>
				</div>
			)}

			{/* Display the character's TV shows if available */}
			{character.tvShows && character.tvShows.length > 0 && (
				<div>
					<h4>TV Shows:</h4>
					<ul>
						{character.tvShows.map((show, index) => (
							<li key={index}>{show}</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default DisneyCard;
