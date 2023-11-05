import * as S from "./style";
// import { cities, citiesAssemble } from "../../global/cities";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCityInfo, addWeatherData } from "../../store/slice";
import getWeatherData from "../../global/api";
import { citiesArray } from "../../global/cityArray";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [country, setCountry] = useState();
  const uniqueCities = [];
  const searchEngine = (inputValue) => {
    if (inputValue.length > 3) {
      setValue(inputValue);
      let cityName = inputValue
        .split(" ")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ")
        .toLowerCase(); // Convert input city name to lowercase

      for (let i = 0; i < citiesArray.length; i++) {
        const city = citiesArray[i].city.toLowerCase(); // Convert city name to lowercase for comparison
        const country = citiesArray[i].country;

        if (city.startsWith(cityName)) {
          const cityExists = uniqueCities.some(
            (item) =>
              item.city === citiesArray[i].city && item.country === country
          );
          if (!cityExists) {
            uniqueCities.push({ city: citiesArray[i].city, country });
          }
        }
      }

      console.log(uniqueCities);
      const list = uniqueCities.map((item) => item.city.toUpperCase());
      const cnt = uniqueCities.map((item) => item.country);

      setData(list);
      setCountry(cnt);
      console.log(list);
      console.log(cnt);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <S.Container>
      <S.Img src="./icons/cloudy.png" />
      <S.list>
        {uniqueCities &&
          uniqueCities
            .slice(-20)
            // .sort((a, b) => b.length - a.length)
            .map((item, index) => (
              <S.listItem
                onClick={() =>
                  getWeatherData(item).then((data) => {
                    dispatch(addWeatherData(data));
                    dispatch(addCityInfo(data));
                    setData("");
                    setCountry("");
                    setValue("");
                  })
                }
                key={index}
              >
                {item.city}, {item.country}
              </S.listItem>
            ))}
      </S.list>
      <S.SearchBar
        // onClick={() => {
        //   listToggle();
        // }}
        placeholder="Choose the city"
        onChange={(e) => searchEngine(e.target.value)}
        value={value}
      ></S.SearchBar>
    </S.Container>
  );
};
