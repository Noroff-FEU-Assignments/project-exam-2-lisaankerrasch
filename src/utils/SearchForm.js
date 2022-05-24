import { useRef } from "react";

export const SearchForm = () => {
  const searchRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchValue = searchRef.current.value;
    console.log(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar">
        <input
          ref={searchRef}
          id="search-text"
          className="search"
          type="search"
          name="search"
          placeholder="Type here..."
        ></input>
        <div className="search-button">
          <button className="search-button">Search</button>
        </div>
      </div>
    </form>
  );
};
