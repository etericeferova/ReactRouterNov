import { Route, Routes, Link, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ProductsDetails from "./pages/ProductsDetails";
import Mission from "./pages/Mission";
import Team from "./pages/Team";
import Reviews from "./pages/Reviews";
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
              location.pathname.startsWith("/about") ? "active" : ""
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
        <Route path="/about" element={<AboutPage />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductsDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
