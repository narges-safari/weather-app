import { useWeather } from "./Weather.biz";
import useWeatherStyle from "./Weather.style";
import { Box, Tab, Tabs } from "@mui/material";
import { City, WeatherData } from "./Weather.types";
import WeatherPanel from "../components/WeatherPanel/WeatherPanel";

const Weather = () => {
  const classes = useWeatherStyle();
  const { cities, tabIndex, isLoading, onCityChange } = useWeather();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={4}
    >
      <Tabs value={tabIndex} onChange={onCityChange} className={classes.tabs}>
        {cities &&
          cities.map((city: City) => <Tab label={city.label} key={city.id} />)}
      </Tabs>
      <Box
        marginTop={2}
        borderRadius={2}
        border={"4px solid white"}
        boxShadow={"0px 0px 15px 15px rgba(210,224,227,0.5)"}
      >
        <WeatherPanel
          isLoading={isLoading}
          key={Number(cities[tabIndex]?.id)}
          weatherData={cities[tabIndex]?.data as WeatherData}
        />
      </Box>
    </Box>
  );
};

export default Weather;
