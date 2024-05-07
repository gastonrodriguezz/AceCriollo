import "./App.css"
import Login from "./Components/Login/Login"
import Register from "./Components/Register/Register"
import Dashboard from "./Components/Dashboard/Dashboard"
import { Helmet } from "react-helmet";
import Icon from "./Icons/favicon.ico"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App () {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,

    },
    {
      path: "/dashboard",
      element: <Dashboard />,

    },
  ]);

  return (<div className="app">
    <RouterProvider router={router} />
    <Helmet>
      <meta charSet="utf-8" />
      <title>AceCriollo</title>
      <link rel="icon" href={Icon} />
    </Helmet>
  </div>)
}

export default App
