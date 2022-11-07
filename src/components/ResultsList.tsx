import Recipe from "../models/Recipe";
import Result from "./Result";
import "./ResultsList.css";

interface Props {
  recipes: Recipe[];
}

const ResultsList = ({ recipes }: Props) => {
  return (
    <div className="ResultsList">
      <h2 className="results">Results</h2>
      {/* <input type="color" /> */}
      <ul>
        {recipes.map((recipe) => (
          <Result key={recipe.id} oneRecipe={recipe} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsList;
