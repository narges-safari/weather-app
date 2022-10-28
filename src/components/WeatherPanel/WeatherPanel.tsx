import { Fragment } from "react";
import WeekDayPanel from "../WeekDayPanel";
import { Box, Typography } from "@mui/material";
import { List } from "../../pages/Weather.types";
import CloudIcon from "@mui/icons-material/Cloud";
import { WeatherPanelProps } from "./WeatherPanel.types";

const WeatherPanel = (props: WeatherPanelProps) => {
  const { value, id, weatherData } = props;

  return (
    <Fragment>
      {value === id && (
        <Box height={500} width={700}>
          <Box
            height={"60%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            borderBottom={"4px solid white"}
          >
            <Typography variant={"h4"} fontWeight={100} marginBottom={2}>
              Today
            </Typography>
            {weatherData?.list.slice(0, 1).map((item: List, index: number) => (
              <Box display={"flex"} alignItems={"center"} key={index}>
                <CloudIcon sx={{ fontSize: 64 }} />
                <Box marginLeft={3}>
                  <Typography>{Math.ceil(item.main.temp)}</Typography>
                  <Typography>{item.weather[0].main}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
          <Box display={"flex"} justifyContent={"space-around"} height={"40%"}>
            {weatherData?.list.slice(1).map((item: List) => (
              <WeekDayPanel
                weekday="Monday"
                temperature={Math.ceil(item.main.temp)}
                icon={<CloudIcon />}
                border
              />
            ))}
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default WeatherPanel;
