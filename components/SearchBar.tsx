"use client";
import { useState } from "react";
import SearchManu from "./SearchManu";
import Image from "next/image";

function SearchBar() {
  const [menufacturer, setMenuFacturer] = useState("");
  const [model, setModel] = useState("");
  const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
    return (
      <button type="submit" className={`ml-3 z-10 ${otherClasses}`}>
        <Image
          src="/magnifying-glass.svg"
          alt="Search"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    );
  };
  const handelSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form className="searchbar" onSubmit={handelSearch}>
      <div className="searchbar__item">
        <SearchManu
          menufacturer={menufacturer}
          setMenuFacturer={setMenuFacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="Search"
          width={30}
          height={30}
          className="object-contain absolute left-3"
        />
        <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Enter You Want"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
