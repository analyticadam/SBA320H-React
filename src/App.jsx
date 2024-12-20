// Main application component
import React from "react";
import { RouterProvider } from "react-router"; // Import RouterProvider
import router from "./router"; // Import the router configuration

const App = () => {
	return (
		// Provide the router to enable navigation between pages
		<RouterProvider router={router} />
	);
};

export default App;
