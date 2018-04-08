const BASE_URL = 'http://api.openweathermap.org/data/2.5'
const API_KEY = '031391b74c5e96af5000cc553c1e766f'
// /forecast?q=London,us&appid=

export const getData = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}`)
  const data = await response.json()
  return data
}