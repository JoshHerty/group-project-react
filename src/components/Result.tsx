import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import "./Result.css";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";

interface Props {
  oneRecipe: Recipe;
}

const Result = ({ oneRecipe }: Props) => {
  const { addFavorite, isFav, deleteFavorite } = useContext(FavoritesContext);
  return (
    <li className="Result">
      <h2>{oneRecipe.title}</h2>
      <Link to={`/details/${oneRecipe.id}`}>
        <img src={oneRecipe.image} alt={oneRecipe.title} />
      </Link>
      {!isFav(oneRecipe.id) ? (
        <button
          onClick={() => {
            addFavorite(oneRecipe);
            // console.log(oneRecipe);
          }}
        >
          Add &hearts;
        </button>
      ) : (
        <button
          className="fav"
          onClick={() => {
            deleteFavorite(oneRecipe.id);
          }}
        >
          Remove &hearts;
        </button>
      )}
    </li>
  );
};

export default Result;
