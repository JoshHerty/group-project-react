import { FormEvent, useState } from "react";
import "./SearchForm.css";

interface Props {
  setTerm: (search: string) => void;
}

const SearchForm = ({ setTerm }: Props) => {
  const [searchRecipe, setSearchRecipe] = useState("");

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    setTerm(searchRecipe);
  };

  return (
    <form className="SearchForm" onSubmit={submitHandler}>
      <label htmlFor="searchTerm">
        <input
          type="text"
          name="searchTerm"
          id="searchTerm"
          value={searchRecipe}
          onChange={(e) => {
            setSearchRecipe(e.target.value);
          }}
        />
        {/* <label htmlFor="diet">Diet</label>
        <input
          type="checkbox"
          name="diet"
          id="diet"
          onChange={(e) => {
          }}
        /> */}
        <button>Search</button>
      </label>
    </form>
  );
};

export default SearchForm;
