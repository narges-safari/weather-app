import { createUseStyles } from "react-jss";

const useWeatherStyle = createUseStyles({
  tabs: {
    "& .MuiTabs-indicator": {
      background: "transparent",
    },
  },
});

export default useWeatherStyle;
