import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <h1>Coding Cookbook</h1>
      <div className="btn-contianer">
        <Link to={"/home"}>
          <button>Home</button>
        </Link>
        <Link to={`/favorites`}>
          <button className="fav">Favorites</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
