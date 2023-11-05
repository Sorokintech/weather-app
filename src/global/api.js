const link =
  "http://api.weatherstack.com/current?access_key=4ced034ee65861fd0de1688ce425f7e8";

const getWeatherData = async (item) => {
  try {
    const result = await fetch(`${link}&query=${item}`);
    const data = await result.json();
    const { location, current } = data;
    let currentData = {};
    Object.assign(currentData, location, current);
    return currentData;
  } catch (error) {
    console.error("Error fetching city data:", error);
    throw error;
  }
};

export default getWeatherData;
