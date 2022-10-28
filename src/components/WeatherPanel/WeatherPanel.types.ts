import { WeatherData } from "../../pages/Weather.types";

export interface WeatherPanelProps {
  id: number;
  value: number;
  weatherData: WeatherData | null;
}
