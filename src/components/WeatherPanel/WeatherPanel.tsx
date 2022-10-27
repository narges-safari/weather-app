import { Fragment } from "react";
import { Box, Typography } from "@mui/material";
import { WeatherPanelProps } from "./WeatherPanel.types";
import CloudIcon from "@mui/icons-material/Cloud";
import WeekDayPanel from "../WeekDayPanel";

const WeatherPanel = (props: WeatherPanelProps) => {
  const { value, index, temperature } = props;

  return (
    <Fragment>
      {value === index && (
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
            <Box display={"flex"} alignItems={"center"}>
              <CloudIcon sx={{ fontSize: 64 }} />
              <Box marginLeft={3}>
                <Typography>{temperature}</Typography>
                <Typography>Clouds</Typography>
              </Box>
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"space-around"} height={"40%"}>
            <WeekDayPanel
              weekday="Monday"
              temperature="19"
              icon={<CloudIcon />}
              border
            />
            <WeekDayPanel
              weekday="Monday"
              temperature="19"
              icon={<CloudIcon />}
              border
            />
            <WeekDayPanel
              weekday="Monday"
              temperature="19"
              icon={<CloudIcon />}
              border
            />
            <WeekDayPanel
              weekday="Monday"
              temperature="19"
              icon={<CloudIcon />}
            />
          </Box>
        </Box>
      )}
    </Fragment>
  );
};

export default WeatherPanel;
