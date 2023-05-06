const link =
  "http://api.weatherstack.com/current?access_key=0b891b93aac84a707ed448c0b44c827f";
export let cityData = "";

export const fetchData = async (item) => {
  const result = await fetch(`${link}&query=${item}}`);

  cityData = await result.json();
  console.log(cityData);
};

fetchData("Saratov");
