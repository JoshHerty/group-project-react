import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import DetailedRecipe from "../models/DetailedRecipe";
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
      <div className="title-link">
        <p className="title">{detailedRecipe.title}</p>
        <a className="source" href={detailedRecipe.sourceUrl}>
          Source
        </a>
      </div>
      <div className="main-detailed-result-content">
        <div className="center-img-p position-heart">
          <div className="image-summary">
            <img src={detailedRecipe.image} alt={detailedRecipe.title} />
            {!isFav(detailedRecipe.id) ? (
              <div className="heart">
                <i
                  className="fa-solid fa-heart fa-4x white"
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
              <div className="heart">
                <i
                  className="changeColor fa-solid fa-heart fa-4x pink"
                  onClick={() => {
                    deleteFavorite(detailedRecipe.id);
                  }}
                ></i>
              </div>
            )}
            <p className="summary">{cleanSummary}</p>
          </div>
          <ul className="ingredients">
            {detailedRecipe.extendedIngredients.map((ingredient) => (
              <li
                key={`${ingredient.id}${Math.floor(Math.random() * 200000)}`}
              >{`${Math.round(ingredient.amount * 100) / 100} ${
                ingredient.unit
              } ${ingredient.name}`}</li>
            ))}
          </ul>
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
