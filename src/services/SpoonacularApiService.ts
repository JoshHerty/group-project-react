import axios from "axios";
import DetailedRecipe from "../models/DetailedRecipe";
import Recipe from "../models/Recipe";
import RecipeResponse from "../models/RecipeResponse";

const apiKey: string = process.env.REACT_APP_SPOONTACULAR_API_KEY2 || "";

export const getRecipeData = (): Promise<RecipeResponse> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/complexSearch?number=15`, {
      params: { apiKey: apiKey },
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getRecipeById = (id: string): Promise<DetailedRecipe> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/information`, {
      params: { apiKey: apiKey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getSimilarRecipes = (id: string): Promise<Recipe[]> => {
  return axios
    .get(`https://api.spoonacular.com/recipes/${id}/similar?number=4`, {
      params: { apiKey: apiKey },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const getRecipesBySearchTerm = (
  searchTerm: string,
  diets: string,
  intolerances: string
): Promise<RecipeResponse> => {
  // console.log(intolerances);

  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: {
        apiKey: apiKey,
        query: searchTerm,
        diet: diets,
        intolerances: intolerances,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
