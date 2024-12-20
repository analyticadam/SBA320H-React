// TVBackground.jsx
import React from "react"; // Import React library
import "./../styles/TVBackground.css"; // Import CSS for the TV background

// Component to render the TV background with a container for dynamic content
const TVBackground = ({ children }) => {
	return (
		<div className="tv-background">
			{/* Outer container for the TV background */}
			<div className="tv-screen">
				{/* Static effect inside the TV */}
				<div className="static"></div>

				{/* Content area within the TV screen where dynamic elements (like images) are displayed */}
				<div className="tv-content">{children}</div>
			</div>
		</div>
	);
};

export default TVBackground;
