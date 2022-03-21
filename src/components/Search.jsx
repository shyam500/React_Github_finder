import { useState } from "react";
import classes from "./Search.module.css";

const Search = ({ searchName }) => {
  const [text, setText] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    searchName(text);
    setText("");
  };

  const inputChangeHandler = (e) => {
    setText(e.target.value);
  };

  
  return (
    <section className={classes.User_container}>
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Search User"
          value={text}
          onChange={inputChangeHandler}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default Search;
