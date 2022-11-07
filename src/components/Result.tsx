import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import "./Result.css";

interface Props {
  oneRecipe: Recipe;
}

const Result = ({ oneRecipe }: Props) => {
  return (
    <li className="Result">
      <h2>{oneRecipe.title}</h2>
      <Link to={`/details/${oneRecipe.id}`}>
        <img src={oneRecipe.image} alt={oneRecipe.title} />
      </Link>
    </li>
  );
};

export default Result;
