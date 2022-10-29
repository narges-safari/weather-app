import moment from "moment";

export const useWeatherPanel = () => {
  const getWeekDay = (date: string) => {
    const dayOfWeek = moment(date).day();

    switch (dayOfWeek) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
    }
  };

  return { getWeekDay };
};
