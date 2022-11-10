import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRecipe from "../models/DetailedRecipe";
import {
  getRecipeById,
  // getSimilarRecipes,
} from "../services/SpoonacularApiService";
import DetailedResult from "./DetailedResult";
import "./Details.css";
import loadingGif from "../assets/loading-gif.gif";

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
        <img className="loading" src={loadingGif} alt="loading" />
      )}
    </div>
  );
};

export default Details;
