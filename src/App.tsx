import { Route, Routes, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductsDetails";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      <nav>
        <div className="menu-list">
          <Link
            to="/"
            className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`menu-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/products"
            className={`menu-item ${
              location.pathname === "/products" ? "active" : ""
            }`}
          >
            Products
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
