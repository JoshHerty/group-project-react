import { useEffect, useState } from "react";
import Recipe from "../models/Recipe";
import {
  getRecipeData,
  getRecipesBySearchTerm,
} from "../services/SpoonacularApiService";
import "./Main.css";
import ResultsList from "./ResultsList";
import SearchForm from "./SearchForm";

const Main = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [diets, setDiets] = useState("");
  const [intolerances, setIntolerances] = useState("");

  // console.log(diets);

  useEffect(() => {
    if (searchTerm !== "" || diets || intolerances) {
      getRecipesBySearchTerm(searchTerm, diets, intolerances).then((res) =>
        setRecipes(res.results)
      );
    } else {
      getRecipeData().then((res) => setRecipes(res.results));
    }
  }, [searchTerm, diets, intolerances]);

  return (
    <main className="Main">
      <SearchForm
        setTerm={setSearchTerm}
        setDiet={setDiets}
        setIntolerance={setIntolerances}
      />
      <ResultsList recipes={recipes} />
    </main>
  );
};

export default Main;
