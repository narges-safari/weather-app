import { City } from "./Weather.types";
import { useWeather } from "./Weather.biz";
import useWeatherStyle from "./Weather.style";
import { Box, Tab, Tabs } from "@mui/material";
import { useWeatherContext } from "./Weather.context";
import WeatherPanel from "../components/WeatherPanel/WeatherPanel";

const Weather = () => {
  const classes = useWeatherStyle();
  const { cities } = useWeatherContext();
  const { tabIndex, onCityChange } = useWeather();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={4}
    >
      <Tabs value={tabIndex} onChange={onCityChange} className={classes.tabs}>
        {cities.map((city: City) => (
          <Tab label={city.label} key={city.id} />
        ))}
      </Tabs>
      <Box
        marginTop={2}
        borderRadius={2}
        border={"4px solid white"}
        boxShadow={"0px 0px 15px 15px rgba(210,224,227,0.5)"}
      >
        {cities &&
          cities.map((city: City) => (
            <WeatherPanel
              id={city.id}
              key={city.id}
              value={tabIndex}
              weatherData={city?.data}
            />
          ))}
      </Box>
    </Box>
  );
};

export default Weather;
