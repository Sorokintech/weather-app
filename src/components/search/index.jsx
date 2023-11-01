import * as S from "./style";
import { cities, citiesAssemble } from "../../global/cities";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export const Search = ({ itemsShown, setItemsShown }) => {
  citiesAssemble();

  const [value, setValue] = useState();
  const [data, setData] = useState();
  const [country, setCountry] = useState();

  const searchEngine = (inputValue) => {
    setValue(inputValue);
    let cityName = inputValue
      .split(" ")
      .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
      .join(" ");
    const res = cities.filter((word) => word.city.startsWith(cityName));
    const list = [];
    const cnt = [];
    for (let i = 0; i < res.length; i++) {
      list.push(res[i].city.toUpperCase());
      cnt.push(res[i].country);
    }
    setData(list);
    setCountry(cnt);
  };
  return (
    <S.Container>
      <S.Img src="./icons/cloudy.png" />
      <S.list>
        {itemsShown
          ? data &&
            data
              .slice(-4)
              .sort((a, b) => a.length - b.length)
              .map((item, index) => (
                <S.listItem
                  // onClick={() => settingCity(item)}
                  key={index}
                >
                  {item}, {country[index]}
                </S.listItem>
              ))
          : ""}
      </S.list>
      <S.SearchBar
        // onClick={() => {
        //   listToggle();
        // }}
        placeholder="Please enter a City Here"
        onChange={(e) => searchEngine(e.target.value)}
        value={value}
      ></S.SearchBar>
    </S.Container>
  );
};
