import { useCallback, useEffect, useState } from "react";
import { getWeather } from "../core/api";
import { initialCities } from "./Weather.const";
import { City, WeatherData } from "./Weather.types";

export const useWeather = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [cities, setCities] = useState<City[]>(initialCities);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // This function returns an object of a city
  const onCitySelect = useCallback(
    (id: number) => {
      return cities.filter((city: City) => city.id === id)?.[0];
    },
    [cities]
  );

  const onCityChange = useCallback(
    (_: React.SyntheticEvent, id: number) => {
      setTabIndex(id);
      setIsLoading(true);
      getCityWeather(onCitySelect(id));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setTabIndex, onCitySelect, setIsLoading]
  );

  const getCityWeather = useCallback(
    (city: City) => {
      getWeather(city.label)
        .then((res: WeatherData) => {
          setCities((prevState) => {
            prevState[city.id].data = res;
            return prevState;
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
    [setCities]
  );

  useEffect(() => {
    getCityWeather(cities[tabIndex]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    tabIndex,
    onCityChange,
    cities,
    isLoading,
  };
};
