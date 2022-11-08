import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import "./Result.css";
import FavoritesContext from "../context/FavoritesContext";
import { useContext } from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div>
          <i
            className="fa-regular fa-star fa-4x"
            onClick={() => {
              addFavorite(oneRecipe);
            }}
          ></i>
        </div>
      ) : (
        <div>
          <i
            className="changeColor fa-solid fa-star fa-4x yellow"
            onClick={() => {
              deleteFavorite(oneRecipe.id);
            }}
          ></i>
        </div>
      )}
    </li>
  );
};

export default Result;
