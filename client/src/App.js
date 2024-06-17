import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateResume from "./pages/CreateResume";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/create-resume", element: <CreateResume /> },
      { path: "/resume", element: <Resume /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
