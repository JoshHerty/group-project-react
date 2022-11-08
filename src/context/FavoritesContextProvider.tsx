import { ReactNode, useState } from "react";
import Recipe from "../models/Recipe";
import FavoritesContext from "./FavoritesContext";

interface Props {
  children: ReactNode;
}

// context provider lives here
// construct data and send that data to app here

const FavoritesContextProvider = ({ children }: Props) => {
  const [favorites, setFavorites] = useState<Recipe[]>([]);

  const addFavorite = (recipe: Recipe): void => {
    setFavorites((prev) => [...prev, recipe]);
    // console.log(favorites);
    // console.log(favorites);
  };

  //  fn: deleteFavorite - immutable, take id: number, return void
  const deleteFavorite = (id: number): void => {
    const index: number = favorites.findIndex((fav) => {
      return fav.id === id;
    });
    if (index !== -1) {
      setFavorites((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
      // console.log(favorites);
    }
  };

  // fn: isFav - take an id: number, return boolean
  const isFav = (idToCheck: number): boolean => {
    return favorites.some((fav) => {
      return fav.id === idToCheck;
    });
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, isFav, deleteFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
