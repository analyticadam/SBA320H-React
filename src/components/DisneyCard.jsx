// Card component to display a single Disney character
import React from "react"; // Import React library

// Component to render a card for a Disney character
const DisneyCard = ({ character }) => {
	// Conditionally render nothing if the character does not have an image
	if (!character.imageUrl) return null;

	return (
		<div className="disney-card">
			{/* Display the character's image */}
			<img src={character.imageUrl} alt={character.name} />

			{/* Display the character's name */}
			<h3>{character.name}</h3>
		</div>
	);
};

export default DisneyCard;
