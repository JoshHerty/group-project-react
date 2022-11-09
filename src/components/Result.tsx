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
      <div className="">
        <Link to={`/details/${oneRecipe.id}`}>
          <img src={oneRecipe.image} alt={oneRecipe.title} />
        </Link>
        {!isFav(oneRecipe.id) ? (
          <i
            className="fa-regular fa-heart fa-4x"
            onClick={() => {
              addFavorite(oneRecipe);
            }}
          ></i>
        ) : (
          <i
            className="changeColor fa-solid fa-heart fa-4x pink"
            onClick={() => {
              deleteFavorite(oneRecipe.id);
            }}
          ></i>
        )}
      </div>
    </li>
  );
};

export default Result;
