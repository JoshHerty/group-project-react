import axios from "axios";
import DetailedRecipe from "../models/DetailedRecipe";
import RecipeResponse from "../models/RecipeResponse";

const apiKey: string = process.env.REACT_APP_SPOONTACULAR_API_KEY4 || "";

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

export const getRecipesBySearchTerm = (
  searchTerm: string
  // vegetarianDiet: boolean
  // glutenIntolerance: boolean
): Promise<RecipeResponse> => {
  return axios
    .get("https://api.spoonacular.com/recipes/complexSearch", {
      params: {
        apiKey: apiKey,
        query: searchTerm,
        // diet: vegetarianDiet,
        // intolerances: glutenIntolerance,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
