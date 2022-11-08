import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      Working Title
      <Link to={`/favorites`}>
        <button>Favorites</button>
      </Link>
    </div>
  );
};

export default Header;
