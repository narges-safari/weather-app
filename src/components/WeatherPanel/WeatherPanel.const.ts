import { IconDictionary } from "./WeatherPanel.types";
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

export const iconDictionary: IconDictionary[] = [
  { code: "01d", value: ClearSkyDay },
  { code: "01n", value: ClearSkyNight },
  { code: "02d", value: FewCloudsDay },
  { code: "02n", value: FewCloudsNight },
  { code: "03d", value: ScatteredClouds },
  { code: "03n", value: ScatteredClouds },
  { code: "04n", value: BrokenClouds },
  { code: "04d", value: BrokenClouds },
  { code: "09n", value: ShowerRain },
  { code: "09d", value: ShowerRain },
  { code: "10n", value: Rain },
  { code: "10d", value: Rain },
  { code: "11n", value: Thunderstorm },
  { code: "11d", value: Thunderstorm },
  { code: "13n", value: Snow },
  { code: "13d", value: Snow },
  { code: "50n", value: Mist },
  { code: "50d", value: Mist },
];
