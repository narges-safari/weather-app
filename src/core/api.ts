// This API fetches 40 records for five days every 3 hours

export const getWeather = async (city: string) => {
  const weatherApi = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&appid=${process.env.REACT_APP_API_KEY}&units=metric`
  );
  return weatherApi.json();
};
