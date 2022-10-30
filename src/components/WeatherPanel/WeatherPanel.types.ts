import { WeatherData } from "../../pages/Weather.types";

export interface WeatherPanelProps {
  weatherData: WeatherData | null;
  isLoading: boolean;
}

export interface IconDictionary {
  code: string;
  value: string;
}
