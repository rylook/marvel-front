import "../assets/styles/_nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Characters</li>
          <li>Comics</li>
          <li>Favorites</li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
