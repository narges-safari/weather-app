import { useWeather } from "./Weather.biz";
import { Box, Tab, Tabs } from "@mui/material";
import WeatherPanel from "../components/WeatherPanel/WeatherPanel";
import useWeatherStyle from "./Weather.style";

const Weather = () => {
  const { cityIndex, onCityChange } = useWeather();
  const classes = useWeatherStyle();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      marginTop={4}
    >
      <Tabs value={cityIndex} onChange={onCityChange} className={classes.tabs}>
        <Tab label="New York" />
        <Tab label="Amsterdam" />
        <Tab label="Tokyo" />
      </Tabs>
      <Box
        marginTop={2}
        borderRadius={2}
        border={"4px solid white"}
        boxShadow={"0px 0px 15px 15px rgba(210,224,227,0.5)"}
      >
        <WeatherPanel value={cityIndex} index={0} temperature={"19"} />
        <WeatherPanel value={cityIndex} index={1} temperature={"12"} />
        <WeatherPanel value={cityIndex} index={2} temperature={"5"} />
      </Box>
    </Box>
  );
};

export default Weather;
