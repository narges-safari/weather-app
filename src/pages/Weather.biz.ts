import { useEffect, useState } from "react";
import { getWeather } from "../core/api";
import { initialCities } from "./Weather.const";
import { IWeatherContext } from "./Weather.context";
import { City, WeatherData } from "./Weather.types";

export const useWeather = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cities, setCities] = useState<City[]>(initialCities);

  const onCitySelect = (id: number) => {
    return cities.filter((city: City) => city.id === id)?.[0];
  };

  const onCityChange = (_: React.SyntheticEvent, id: number) => {
    setTabIndex(id);
    getCityWeather(onCitySelect(id));
  };

  const getCityWeather = (city: City) => {
    getWeather(city.label).then((res: WeatherData) => {
      setCities((prevState) => {
        prevState[city.id].data = res;
        return prevState;
      });
    });
  };

  useEffect(() => {
    getCityWeather(cities[tabIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const weatherContextValue: IWeatherContext = {
    cities,
    setCities,
  };

  return { tabIndex, onCityChange, weatherContextValue };
};
