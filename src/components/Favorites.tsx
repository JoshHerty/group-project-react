import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import "./Favorites.css";
import Result from "./Result";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);
  console.log(favorites);
  return (
    <ul className="Favorites">
      {favorites.map((fav) => (
        <Result key={fav.id.toString()} oneRecipe={fav} />
      ))}
    </ul>
  );
};

export default Favorites;
