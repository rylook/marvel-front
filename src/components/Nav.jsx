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
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/comics">Comics</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
