import "../assets/styles/_footer.scss";
import logo from "../assets/logo-red.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Link to="/">
          <img src={logo} alt="marvel" />
        </Link>
        <nav>
          <ul>
            <li>Home</li>
            <li>Characters</li>
            <li>Comics</li>
            <li>Favorites</li>
          </ul>
        </nav>
        <div className="copyright">&copy; 2023 MARVEL</div>
      </div>
    </footer>
  );
};

export default Footer;
