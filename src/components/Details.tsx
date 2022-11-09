import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRecipe from "../models/DetailedRecipe";
import Recipe from "../models/Recipe";
import RecipeResponse from "../models/RecipeResponse";
import {
  getRecipeById,
  // getSimilarRecipes,
} from "../services/SpoonacularApiService";
import DetailedResult from "./DetailedResult";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [recipe, setRecipe] = useState<DetailedRecipe>();
  // const [similarRecipe, setSimilarRecipe] = useState<Recipe[]>();

  useEffect(() => {
    getRecipeById(id!).then((res) => setRecipe(res));
  }, [id]);

  // useEffect(() => {
  //   getSimilarRecipes(id!).then((res) => setSimilarRecipe(res));
  // }, [id]);

  // console.log(recipe);

  return (
    <div className="Details">
      {recipe ? (
        <DetailedResult
          detailedRecipe={recipe}
          // similarRecipes={similarRecipe}
        />
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default Details;
