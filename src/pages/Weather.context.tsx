import { FC, Dispatch, useContext, createContext, SetStateAction } from "react";
import { initialCities } from "./Weather.const";
import { City } from "./Weather.types";

export type IWeatherContext = {
  cities: City[];
  setCities: Dispatch<SetStateAction<City[]>>;
};

type IWeatherProvider = FC<{ value: IWeatherContext }>;

const WeatherContext = createContext<IWeatherContext>({
  cities: initialCities,
  setCities: () => undefined,
});

export const useWeatherContext = () =>
  useContext<IWeatherContext>(WeatherContext);

export const WeatherProvider: IWeatherProvider = ({ ...props }) => (
  <WeatherContext.Provider {...{ ...props }} />
);
