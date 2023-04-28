import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Recipe from "../models/Recipe";
import { getSimilarRecipes } from "../services/SpoonacularApiService";
import "./SimilarRecipeList.css";

interface Props {
  // recipe: Recipe;
  id: string;
}

const SimilarRecipeList = ({ id }: Props) => {
  const [simRecipes, setSimRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    getSimilarRecipes(id).then((res) => setSimRecipes(res));
  }, [id]);

  return (
    <div className="SimilarRecipeList">
      {simRecipes.map((recipe) => (
        <div>
          <Link to={`/details/${recipe.id}`}>
            <p key={`${recipe.id}${Math.floor(Math.random() * 200000)}`}>
              {recipe.title}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SimilarRecipeList;
