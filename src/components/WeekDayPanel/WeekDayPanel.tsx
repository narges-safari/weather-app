import { Box, Typography } from "@mui/material";
import { WeekDayPanelProps } from "./WeekDayPanelProps";

const WeekDayPanel = (props: WeekDayPanelProps) => {
  const { weekday, icon, temperature, border } = props;

  return (
    <Box
      width={"25%"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"space-around"}
      borderRight={border ? "4px solid white" : "unset"}
    >
      <Typography>{weekday}</Typography>
      {icon}
      <Typography>{temperature}</Typography>
    </Box>
  );
};

export default WeekDayPanel;
