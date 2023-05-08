import { Link } from "react-router-dom";
import "../styles/Navbar.scss";

export const Navbar = () => {
  return (
    <nav>
      <ul className="linkcontainer">
        <li className="linkcontainer__link">
          <Link to="/">Start</Link>
        </li>
        <li className="linkcontainer__link">
          <Link to="/animals">Animals</Link>
        </li>
      </ul>
    </nav>
  );
};
