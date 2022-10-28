export const getWeather = async (city: string) => {
  const weatherApi = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=5&appid=40a25786cbbf133f4b81316fac9158a7&units=metric`
  );
  return weatherApi.json();
};
