import moment from "moment";
import { useMemo } from "react";
import { iconDictionary } from "./WeatherPanel.const";
import { WeatherPanelProps } from "./WeatherPanel.types";

export const useWeatherPanel = (props: WeatherPanelProps) => {
  const { weatherData } = props;

  const getWeekDay = (date: string) => {
    const dayOfWeek = moment(date).day();
    switch (dayOfWeek) {
      case 0:
        return "Sun";
      case 1:
        return "Mon";
      case 2:
        return "Tue";
      case 3:
        return "Wed";
      case 4:
        return "Thu";
      case 5:
        return "Fri";
      case 6:
        return "Sat";
    }
  };

  const weatherIconRenderer = (iconCode: string) => {
    return iconDictionary.filter((item) => item.code === iconCode)[0].value;
  };

  // Each day has 8 record, and this function only retruns 1 record for each day
  const filteredData = useMemo(
    () => weatherData?.list.filter((item) => item.dt_txt.includes("12:00:00")),
    [weatherData?.list]
  );

  return { getWeekDay, weatherIconRenderer, filteredData };
};
