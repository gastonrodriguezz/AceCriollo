import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
const Body = () => {
	const appRouter = createBrowserRouter([
		{
			path: "/home",
			element: <Home />,
		},
		{
			path: "/login",
			element: <Login />,
		},
	]);
	return (
		<div>
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;