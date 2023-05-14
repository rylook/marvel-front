import "../assets/styles/_header.scss";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header>
        <Link to="/">
          <img src={logo} alt="marvel" />
        </Link>

        <input type="text" placeholder="Recherche un personnage ou un comics" />
      </header>
    </div>
  );
};

export default Header;
