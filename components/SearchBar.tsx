"use client";
import { useState } from "react";
import SearchManu from "./SearchManu";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { manufacturers } from "@/constants";

function SearchBar() {
  const [menufacturer, setMenuFacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
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

    if (menufacturer == "" && model == "") return;

    updateSearchParamsUrl(model.toUpperCase(), menufacturer.toUpperCase());
  };

  const updateSearchParamsUrl = (model: string, menufacturer: string) => {
    // this step that make the url ex localhost:3000 get that
    const searchParams = new URLSearchParams(window.location.search);

    // this is to put the mode in url or delete that to use it in the filter
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model", model);
    }

    // this is to put the menufacturer in url or delete that to use it in the filter
    if (menufacturer) {
      searchParams.set("menufacturer", menufacturer);
    } else {
      searchParams.delete("menufacturer", menufacturer);
    }

    const newPathUrl = `${window.location.search}?${searchParams.toString()}`;
    router.push(newPathUrl);
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
