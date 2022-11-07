import DetailedRecipe from "../models/DetailedRecipe";
import "./DetailedResult.css";

interface Props {
  detailedRecipe: DetailedRecipe;
}

const DetailedResult = ({ detailedRecipe }: Props) => {
  let cleanSummary = detailedRecipe.summary.replace(/<\/?[^>]+(>|$)/g, "");

  return (
    <div className="DetailedResult">
      <p>{detailedRecipe.title}</p>
      <img src={detailedRecipe.image} alt={detailedRecipe.title} />
      <p>{cleanSummary}</p>
      <a href={detailedRecipe.sourceUrl}>Source</a>
    </div>
  );
};

export default DetailedResult;
