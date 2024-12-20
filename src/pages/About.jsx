// About.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./../styles/About.css"; // Import custom styles for the About page

const About = () => {
	return (
		<div className="about-container">
			<h1>About Disney Character Viewer</h1>

			{/* App description */}
			<p>
				Welcome to the <strong>Disney Character Viewer</strong>, a React-based
				application that allows you to explore and learn about Disney
				characters. Browse through a vast collection, see their movies, TV
				shows, and enjoy the fun facts.
			</p>

			{/* Fun trivia */}
			<div className="trivia-section">
				<h2>Disney Trivia</h2>
				<ul>
					<li>
						Did you know Mickey Mouse was the first animated character to earn a
						star on the Hollywood Walk of Fame?
					</li>
					<li>
						The Lion King's famous "Hakuna Matata" phrase means "No worries" in
						Swahili.
					</li>
					<li>
						Elsa from <i>Frozen</i> was originally intended to be a villain!
					</li>
					<li>
						Disneyland originally sold tickets for as little as $1 back in 1955.
					</li>
				</ul>
			</div>

			{/* Navigation link back to the Home page */}
			<Link to="/" className="back-link">
				Back to Home
			</Link>
		</div>
	);
};

export default About;
