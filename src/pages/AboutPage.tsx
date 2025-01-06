import { Link, Outlet } from "react-router-dom";

const AboutPage = () => {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <ul>
          <li>
            <Link to="mission">Mission</Link>
          </li>
          <li>
            <Link to="team">Team</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default AboutPage;
