import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyle?: string;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}
export interface SearchMenufactorerProps {
  menufacturer: string;
  setMenuFacturer: (menufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface filterProps {
  menufacturer: string;
  year: number;
  fuel: string;
  limit: number;
  model: string;
}
// export interface CardDetailsProps {
//   isOpen: boolean;
//   setIsOpen: (isOpen: boolean) => void;
// }
