import * as S from "./style";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCityInfo, addWeatherData } from "../../store/slice";
import getWeatherData from "../../global/api";
import { citiesArray } from "../../global/citiesArray";

export const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState();
  const [list, setList] = useState();
  const uniqueCities = [];
  const searchEngine = (inputValue) => {
    if (inputValue.length > 3) {
      setValue(inputValue);
      let cityName = inputValue
        .split(" ")
        .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
        .join(" ")
        .toLowerCase();

      for (let i = 0; i < citiesArray.length; i++) {
        const city = citiesArray[i].city.toLowerCase();
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
      setList(uniqueCities);
    } else {
      setValue(inputValue);
    }
  };

  return (
    <S.Container>
      <S.Img src="./icons/cloudy.png" />
      <S.list>
        {list &&
          list
            .slice(-5)
            .sort((a, b) => a.city.length - b.city.length)
            .map((item, index) => (
              <S.listItem
                onClick={() =>
                  getWeatherData(item.city).then((data) => {
                    dispatch(addWeatherData(data));
                    dispatch(addCityInfo(data));
                    setValue("");
                    setList("");
                  })
                }
                key={index}
              >
                {item.city}, {item.country}
              </S.listItem>
            ))}
      </S.list>
      <S.SearchBar
        placeholder="Choose the city"
        onChange={(e) => searchEngine(e.target.value)}
        onBlur={() => setValue("")}
        defaultValue={""}
        value={value}
      ></S.SearchBar>
    </S.Container>
  );
};
