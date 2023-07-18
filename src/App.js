import React, { lazy } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
// import Store from "./Components/STORE/Store";
import RootLayout from "./Components/RootLayout/RootLayout";
// import About from "./Components/ABOUT/About";
// import Home from "./Components/HOME/Home";
// import Contact from "./Components/ContactUs/Contact";
import ProductDetails from "./Components/STORE/Products/ProductDetails";
import AuthContext from "./auth-context";
import { Suspense } from "react";
// import Login from "./Components/Login/Login";

const Home = lazy(() => import("./Components/HOME/Home"));
const Store = lazy(() => import("./Components/STORE/Store"));
const About = lazy(() => import("./Components/ABOUT/About"));
const Contact = lazy(() => import("./Components/ContactUs/Contact"));
const Login = lazy(() => import("./Components/Login/Login"));
// const ProductDetails = lazy(() =>
//   import("./Components/STORE/Products/ProductDetails")
// );

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
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/store"
              element={isLoggedIn ? <Store /> : <Navigate to="/login" />}
            />
            <Route path="/store/:productId" element={<ProductDetails />} />
            <Route
              path="/about"
              element={isLoggedIn ? <About /> : <Navigate to="/login" />}
            />
            <Route
              path="/contact"
              element={isLoggedIn ? <Contact /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!isLoggedIn ? <Login /> : <Navigate to="/store" />}
            />
            <Route path="*" element={<Navigate to="/home" />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
