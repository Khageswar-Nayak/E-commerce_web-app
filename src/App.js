import { BrowserRouter, Routes, Route } from "react-router-dom";
import Store from "./Components/STORE/Store";
import RootLayout from "./Components/RootLayout/RootLayout";
import About from "./Components/ABOUT/About";
import Home from "./Components/HOME/Home";
import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/STORE/Products/ProductDetails";
import Product from "./Components/STORE/Products/Product";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     // errorElement: <ErrorPage />,
//     children: [
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About /> },
//       { path: "/home", element: <Home /> },
//       { path: "/contact", element: <Contact /> },
//     ],
//   },
// ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/:productId" element={<ProductDetails />} />

          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
