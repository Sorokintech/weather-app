const link =
  "http://api.weatherstack.com/current?access_key=0b891b93aac84a707ed448c0b44c827f";
let cityData = "";

const getCity = async (item) => {
  const result = await fetch(`${link}&query=${item}}`);

  cityData = await result.json();
  console.log(cityData);
};
export default getCity;

// fetchData("Saratov");
