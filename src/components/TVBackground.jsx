// TVBackground component - creates the motion TV background
import React from "react";
import "./../styles/TVBackground.css"; // Import CSS for the TV background

const TVBackground = () => {
	return (
		<div className="tv-background">
			<div className="tv-screen">
				<div className="static"></div>
			</div>
		</div>
	);
};

export default TVBackground;
