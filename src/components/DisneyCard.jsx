// Card component to display a single Disney character
import React from "react";
import { Link } from "react-router"; // For navigation

const DisneyCard = ({ character }) => {
	return (
		<div className="disney-card">
			{/* Character image */}
			<img src={character.imageUrl} alt={character.name} />
			{/* Character name */}
			<h3>{character.name}</h3>
			{/* Link to the character detail page */}
			<Link to={`/character/${character._id}`}>View Details</Link>
		</div>
	);
};

export default DisneyCard;
