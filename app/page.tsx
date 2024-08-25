import CarCard from "@/components/CarCard";
import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { manufacturers } from "@/constants";
import { fetchCars } from "@/utlis";
import { all } from "axios";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const allCars = await fetchCars({
    menufacturer: searchParams.menufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(allCars);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might Like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="year" />
            <CustomFilter title="year" />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl">Oops No Results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
