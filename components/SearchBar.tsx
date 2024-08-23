"use client";
import { useState } from "react";
import SearchManu from "./SearchManu";

function SearchBar() {
  const [menufacturer, setMenuFacturer] = useState("");
  const handelSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManu
          menufacturer={menufacturer}
          setMenuFacturer={setMenuFacturer}
        />
      </div>
    </form>
  );
}

export default SearchBar;
