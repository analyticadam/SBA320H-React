// Main entry point for the React app
import React from "react";
import ReactDOM from "react-dom/client"; // Use react-dom/client instead of react-dom
import App from "./App"; // Import the main app component
import "./styles/App.css"; // Import global styles

// Render the app into the root div in the HTML file
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
