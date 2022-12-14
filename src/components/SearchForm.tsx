import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setTerm: (search: string) => void;
  setDiet: (diets: string) => void;
  setIntolerance: (intolerances: string) => void;
}

const SearchForm = ({ setTerm, setDiet, setIntolerance }: Props) => {
  const [searchRecipe, setSearchRecipe] = useState("");
  const [diets, setDiets] = useState([""]);
  const [intolerances, setIntolerances] = useState([""]);
  const [showOptions, setShowOptions] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  //   console.log(vegan);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTerm(searchRecipe);
    setDiet(diets.toString());
    setIntolerance(intolerances.toString());
  };

  const addDiet = (string: string): void => {
    setDiets((prev) => [...prev, string]);
  };

  const removeDiet = (string: string): void => {
    const index: number = diets.findIndex((diet) => {
      return diet === string;
    });
    if (index !== -1) {
      setDiets((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    }
  };

  const addIntolerance = (string: string): void => {
    setIntolerances((prev) => [...prev, string]);
  };

  const removeIntolerance = (string: string): void => {
    const index: number = intolerances.findIndex((diet) => {
      return diet === string;
    });
    if (index !== -1) {
      setIntolerances((prev) => [
        ...prev.slice(0, index),
        ...prev.slice(index + 1),
      ]);
    }
  };

  const toggleOptions = () => {
    setShowOptions((prev) => {
      if (!prev) {
        setTimeout(() => {
          setFadeIn(true);
        }, 0.1);
      } else {
        setFadeIn(false);
        setDiets([""]);
        setIntolerances([""]);
      }
      return !prev;
    });
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="searchTerm">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          placeholder="Search"
          value={searchRecipe}
          onChange={(e) => {
            setSearchRecipe(e.target.value);
          }}
        />
        <section>
          {showOptions ? (
            <div>
              <div className="show-more">
                <div className={`options${fadeIn ? " animate" : ""}`}>
                  <p>Diets:</p>
                  <label htmlFor="vegan">Vegan:</label>
                  <input
                    type="checkbox"
                    name="vegan"
                    id="vegan"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addDiet("vegan");
                      } else {
                        removeDiet("vegan");
                      }
                    }}
                  />
                  <label htmlFor="vegetarian">Vegetarian:</label>
                  <input
                    type="checkbox"
                    name="vegetarian"
                    id="vegetarian"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addDiet("vegetarian");
                      } else {
                        removeDiet("vegetarian");
                      }
                    }}
                  />
                  <label htmlFor="gluten">Gluten:</label>
                  <input
                    type="checkbox"
                    name="gluten"
                    id="gluten"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addDiet("gluten");
                      } else {
                        removeDiet("gluten");
                      }
                    }}
                  />
                  <p>Intolerances:</p>
                  <label htmlFor="dairy">Dairy:</label>
                  <input
                    type="checkbox"
                    name="dairy"
                    id="dairy"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addIntolerance("dairy");
                      } else {
                        removeIntolerance("dairy");
                      }
                    }}
                  />
                  <label htmlFor="tree-nut">Tree nut:</label>
                  <input
                    type="checkbox"
                    name="tree-nut"
                    id="tree-nut"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addIntolerance("tree nut");
                      } else {
                        removeIntolerance("tree nut");
                      }
                    }}
                  />
                  <label htmlFor="seafood">Seafood:</label>
                  <input
                    type="checkbox"
                    name="seafood"
                    id="seafood"
                    onChange={(e) => {
                      if (e.target.checked) {
                        addIntolerance("seafood");
                      } else {
                        removeIntolerance("seafood");
                      }
                    }}
                  />
                </div>
              </div>
              <div className="button" onClick={toggleOptions}>
                <p>Show Less</p>
              </div>
            </div>
          ) : (
            <div className="button" onClick={toggleOptions}>
              <p>Show More</p>
            </div>
          )}
          <button className="search-button" title="Search">
            <i className="fa-solid fa-magnifying-glass fa-2x"></i>
          </button>
        </section>
      </label>
    </form>
  );
};

export default SearchForm;
