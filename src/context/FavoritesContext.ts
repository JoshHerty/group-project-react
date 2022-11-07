import { createContext } from "react";
import Recipe from "../models/Recipe";

interface FavoritesContextModel {
  favorites: Recipe[];
  addFavorite: (recipe: Recipe) => void;
  isFav: (id: number) => boolean;
  deleteFavorite: (id: number) => void;
}

const defaultValues: FavoritesContextModel = {
  favorites: [],
  // for default values for a function: ()=>{}, if it returns void
  addFavorite: () => {},
  isFav: () => false,
  deleteFavorite: () => {},
};

const FavoritesContext = createContext(defaultValues);

export default FavoritesContext;

// context object lives here
// describe provider here
