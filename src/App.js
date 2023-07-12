import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/STORE/Store";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/ABOUT/About";
import Home from "./Components/HOME/Home";
import Contact from "./Components/ContactUs/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
