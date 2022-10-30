import { useMemo } from "react";
import moment from "moment";
import ClearSkyDay from "../../assets/icons/ClearSkyDay.png";
import ClearSkyNight from "../../assets/icons/ClearSkyNight.png";
import FewCloudsDay from "../../assets/icons/FewCloudsDay.png";
import FewCloudsNight from "../../assets/icons/FewCloudsNight.png";
import ScatteredClouds from "../../assets/icons/ScatteredClouds.png";
import BrokenClouds from "../../assets/icons/BrokenClouds.png";
import ShowerRain from "../../assets/icons/ShowerRain.png";
import Rain from "../../assets/icons/Rain.png";
import Thunderstorm from "../../assets/icons/Thunderstorm.png";
import Snow from "../../assets/icons/Snow.png";
import Mist from "../../assets/icons/Mist.png";
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
    switch (iconCode) {
      case "01d":
        return ClearSkyDay;
      case "01n":
        return ClearSkyNight;
      case "02d":
        return FewCloudsDay;
      case "02n":
        return FewCloudsNight;
      case "03d":
        return ScatteredClouds;
      case "03n":
        return ScatteredClouds;
      case "04n":
        return BrokenClouds;
      case "04d":
        return BrokenClouds;
      case "09n":
        return ShowerRain;
      case "09d":
        return ShowerRain;
      case "10n":
        return Rain;
      case "10d":
        return Rain;
      case "11n":
        return Thunderstorm;
      case "11d":
        return Thunderstorm;
      case "13n":
        return Snow;
      case "13d":
        return Snow;
      case "50n":
        return Mist;
      case "50d":
        return Mist;
    }
  };

  // Each day has 8 record, and this function only retruns 1 record for each day
  const filteredData = useMemo(
    () => weatherData?.list.filter((item) => item.dt_txt.includes("12:00:00")),
    [weatherData?.list]
  );

  return { getWeekDay, weatherIconRenderer, filteredData };
};
