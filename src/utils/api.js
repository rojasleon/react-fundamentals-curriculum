const BASE_URL = 'https://api.openweathermap.org/data/2.5'
const API_KEY = 'b714ec74bbab5650795063cb0fdf5fbe'

export const getForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast/daily?q=${city}&type=accurate&appid=${API_KEY}&cnt=5`)
  const data = await response.json()
  return {data, status: response.status};
}