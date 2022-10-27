import { useState } from "react";

export const useWeather = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const onCityChange = (event: React.SyntheticEvent, _cityIndex: number) => {
    setCityIndex(_cityIndex);
  };

  return {
    cityIndex,
    onCityChange,
  };
};
