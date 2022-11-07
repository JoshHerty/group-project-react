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

  useEffect(() => {
    if (searchTerm !== "") {
      getRecipesBySearchTerm(searchTerm).then((res) => setRecipes(res.results));
    } else {
      getRecipeData().then((res) => setRecipes(res.results));
    }
  }, [searchTerm]);

  return (
    <main className="Main">
      <SearchForm setTerm={setSearchTerm} />
      <ResultsList recipes={recipes} />
    </main>
  );
};

export default Main;
