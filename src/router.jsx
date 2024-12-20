// React router configuration
import { createBrowserRouter } from "react-router";
import Home from "./pages/Home"; // Import the Home page
import About from "./pages/About"; // Import the About page
import CharacterDetail from "./pages/CharacterDetail"; // Import the Character Detail page

// Define routes for the app
const router = createBrowserRouter([
	{
		path: "/", // Route for the home page
		element: <Home />,
	},
	{
		path: "/about", // Route for the about page
		element: <About />,
	},
	{
		path: "/character/:id", // Dynamic route for character details
		element: <CharacterDetail />,
	},
]);

export default router;
