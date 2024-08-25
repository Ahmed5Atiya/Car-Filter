import { manufacturers } from "./../constants/index";
import { CarProps, filterProps } from "@/types";

export async function fetchCars(filters: filterProps) {
  const { model, menufacturer, year, limit, fuel } = filters;
  const headers = {
    "x-rapidapi-key": "94472f578fmshecb3f0c797d42a9p18f2cfjsnd01d2259f3c9",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${menufacturer}&model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}`,
    { headers: headers }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateTheUrlPathName = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathUrl = `${window.location.pathname}?${searchParams.toString()}`;
  return newPathUrl;
};

// export const generateCarImageUrl = (car: CarProps, angle?: string) => {
//   const url = new URL("https://cdn.imagin.studio/getimage");
//   const { make, model, year } = car;

//   url.searchParams.append("customer", "hrjavascript-mastery");
//   url.searchParams.append("make", make);
//   url.searchParams.append("modelFamily", model.split(" ")[0]);
//   url.searchParams.append("zoomType", "fullscreen");
//   url.searchParams.append("modelYear", `${year}`);
//   // url.searchParams.append('zoomLevel', zoomLevel);
//   url.searchParams.append("angle", `${angle}`);

//   return `${url}`;
// };
export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};
