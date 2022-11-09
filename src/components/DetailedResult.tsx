import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import DetailedRecipe from "../models/DetailedRecipe";
import Recipe from "../models/Recipe";
import RecipeResponse from "../models/RecipeResponse";
import "./DetailedResult.css";
import SimilarRecipeList from "./SimilarRecipeList";

interface Props {
  detailedRecipe: DetailedRecipe;
}

const DetailedResult = ({ detailedRecipe }: Props) => {
  const { addFavorite, isFav, deleteFavorite } = useContext(FavoritesContext);
  let cleanSummary = detailedRecipe.summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="DetailedResult">
      <div>
        <div className="title-link">
          <p className="title">{detailedRecipe.title}</p>
          <a className="source" href={detailedRecipe.sourceUrl}>
            Source
          </a>
        </div>
        <div className="center-img-p">
          <img src={detailedRecipe.image} alt={detailedRecipe.title} />
          <p className="summary">{cleanSummary}</p>
          {!isFav(detailedRecipe.id) ? (
            <div>
              <i
                className="fa-regular fa-heart fa-4x"
                onClick={() => {
                  addFavorite({
                    title: detailedRecipe.title,
                    id: detailedRecipe.id,
                    image: detailedRecipe.image,
                  });
                }}
              ></i>
            </div>
          ) : (
            <div>
              <i
                className="changeColor fa-solid fa-heart fa-4x pink"
                onClick={() => {
                  deleteFavorite(detailedRecipe.id);
                }}
              ></i>
            </div>
          )}
        </div>
      </div>
      <div className="similar-recipes">
        <p id="footer-title">Similar Recipes:</p>
        <SimilarRecipeList id={detailedRecipe.id.toString()} />
      </div>
    </div>
  );
};

export default DetailedResult;
