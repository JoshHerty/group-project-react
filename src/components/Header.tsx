import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Coding Cookbook</h1>
      <Link to={"/home"}>
        <button>Home</button>
      </Link>
      <Link to={`/favorites`}>
        <button>Favorites</button>
      </Link>
    </div>
  );
};

export default Header;
