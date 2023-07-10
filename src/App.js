import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Store from "./Components/STORE/Store";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/ABOUT/About";
import Home from "./Components/HOME/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
    children: [
      { path: "/store", element: <Store /> },
      { path: "/about", element: <About /> },
      { path: "/home", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
