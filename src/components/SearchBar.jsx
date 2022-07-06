import { useState } from "react";
import './SearchBar.css'

export default function SearchBar({ findGame }) {
  const [searchText, setSearchText] = useState("");

  function handleChange(event) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitSearch()
    setSearchText("");
  }

  function submitSearch() {
    findGame(searchText);
  }
  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={searchText} name="searchBar" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}