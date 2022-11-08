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
<<<<<<< HEAD
      <div className="title-link">
        <p className="title">{detailedRecipe.title}</p>
        <a href={detailedRecipe.sourceUrl}>Source</a>
      </div>
      <div className="center-img-p">
        <img src={detailedRecipe.image} alt={detailedRecipe.title} />
        <p className="summary">{cleanSummary}</p>
        {!isFav(detailedRecipe.id) ? (
          <div>
            <i
              className="fa-regular fa-star fa-4x"
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
              className="changeColor fa-solid fa-star fa-4x yellow"
              onClick={() => {
                deleteFavorite(detailedRecipe.id);
              }}
            ></i>
          </div>
        )}
      </div>
=======
      <p>{detailedRecipe.title}</p>
      <img src={detailedRecipe.image} alt={detailedRecipe.title} />
      <p className="summary">{cleanSummary}</p>
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
>>>>>>> 40c2590fb7cde47009944d44b257aedc2f1378e7
    </div>
  );
};

export default DetailedResult;
