import { Fragment } from "react";
import WeekDayPanel from "../WeekDayPanel";
import { List } from "../../pages/Weather.types";
import { useWeatherPanel } from "./WeatherPanel.biz";
import { WeatherPanelProps } from "./WeatherPanel.types";
import { Box, CircularProgress, Typography } from "@mui/material";

const WeatherPanel = (props: WeatherPanelProps) => {
  const { filteredData, getWeekDay, weatherIconRenderer } =
    useWeatherPanel(props);

  return (
    <Fragment>
      <Box
        height={{ md: 500, sm: 320, xs: 320 }}
        width={{ md: 700, sm: 300, xs: 300 }}
      >
        {!filteredData ? (
          <Box
            height={"100%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <CircularProgress size={64} />
          </Box>
        ) : (
          <>
            <Box
              height={"60%"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              borderBottom={"4px solid white"}
            >
              <Typography
                fontSize={{ md: 32, sm: 16 }}
                marginBottom={{ md: 3, sm: 1 }}
              >
                Today
              </Typography>
              {filteredData?.slice(0, 1).map((item: List) => (
                <Box display={"flex"} alignItems={"center"} key={item.dt}>
                  <Box paddingRight={{ md: 2, sm: 1 }}>
                    <img
                      src={weatherIconRenderer(item.weather[0].icon)}
                      alt={"today-weather-icon"}
                    />
                  </Box>
                  <Box paddingLeft={{ md: 2, sm: 1 }}>
                    <Typography
                      variant={"h3"}
                      fontWeight={"bold"}
                    >{`${Math.round(item.main.temp)}°`}</Typography>
                    <Typography fontSize={{ md: 24, sm: 12 }}>
                      {item.weather[0].description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-around"}
              height={"40%"}
            >
              {filteredData?.slice(1).map((item: List, index: number) => (
                <WeekDayPanel
                  key={item.dt}
                  weekday={getWeekDay(item.dt_txt)!}
                  temperature={Math.round(item.main.temp)}
                  icon={weatherIconRenderer(item.weather[0].icon)}
                  border={index < 3}
                />
              ))}
            </Box>
          </>
        )}
      </Box>
    </Fragment>
  );
};

export default WeatherPanel;
