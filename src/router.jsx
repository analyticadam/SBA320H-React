// router.jsx
import React from "react"; // Import React library
import { RouterProvider, createBrowserRouter } from "react-router"; // Import core react-router components
import Home from "./pages/Home"; // Import the Home component
import About from "./pages/About"; // Import the About component

// Define the routes using createBrowserRouter
const router = createBrowserRouter([
	{
		path: "/", // Route for the Home page
		element: <Home />, // Component to render for this route
	},
	{
		path: "/about", // Route for the About page
		element: <About />, // Component to render for this route
	},
]);

// AppRouter component to provide routing logic to the application
const AppRouter = () => {
	return <RouterProvider router={router} />;
};

export default AppRouter; // Export the AppRouter component
