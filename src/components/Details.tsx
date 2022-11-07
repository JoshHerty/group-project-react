import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailedRecipe from "../models/DetailedRecipe";
import { getRecipeById } from "../services/SpoonacularApiService";
import DetailedResult from "./DetailedResult";
import "./Details.css";

const Details = () => {
  const id: string | undefined = useParams().id;
  const [recipe, setRecipe] = useState<DetailedRecipe>();

  useEffect(() => {
    getRecipeById(id!).then((res) => setRecipe(res));
  }, [id]);

  // console.log(recipe);

  return (
    <div className="Details">
      {recipe ? <DetailedResult detailedRecipe={recipe} /> : <p>loading...</p>}
    </div>
  );
};

export default Details;
