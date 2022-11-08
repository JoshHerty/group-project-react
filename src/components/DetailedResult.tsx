import { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import DetailedRecipe from "../models/DetailedRecipe";
import "./DetailedResult.css";

interface Props {
  detailedRecipe: DetailedRecipe;
}

const DetailedResult = ({ detailedRecipe }: Props) => {
  const { addFavorite, isFav, deleteFavorite } = useContext(FavoritesContext);
  let cleanSummary = detailedRecipe.summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="DetailedResult">
      <p>{detailedRecipe.title}</p>
      <img src={detailedRecipe.image} alt={detailedRecipe.title} />
      <p>{cleanSummary}</p>
      <a href={detailedRecipe.sourceUrl}>Source</a>
      {!isFav(detailedRecipe.id) ? (
        <button
          onClick={() => {
            addFavorite({
              title: detailedRecipe.title,
              id: detailedRecipe.id,
              image: detailedRecipe.image,
            });
          }}
        >
          Add &hearts;
        </button>
      ) : (
        <button
          className="fav"
          onClick={() => {
            deleteFavorite(detailedRecipe.id);
          }}
        >
          Remove &hearts;
        </button>
      )}
    </div>
  );
};

export default DetailedResult;
