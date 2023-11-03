import React from "react";
import * as S from "./style";
import { useSelector } from "react-redux";

const SmallBlock = () => {
  const cityData = useSelector((state) => state?.weatherData);
  const weatherDataArray = [];
  if (cityData) {
    const {
      cloudcover,
      humidity,
      utc_offset,
      wind_speed,
      pressure,
      uv_index,
      visibility,
    } = cityData;
    weatherDataArray.push(
      { key: "Cloud Cover", value: cloudcover, icon: "cloudcover" },
      { key: "Humidity", value: humidity, icon: "humidity" },
      { key: "UTC Offset", value: utc_offset, icon: "utc_offset" },
      { key: "Wind Speed", value: wind_speed, icon: "wind_speed" },
      { key: "Pressure", value: pressure, icon: "pressure" },
      { key: "UV Index", value: uv_index, icon: "uv_index" },
      { key: "Visibility", value: visibility, icon: "visibility" }
    );
  }

  console.log(weatherDataArray);

  return (
    <>
      {weatherDataArray.map((item) => (
        <S.Container>
          <S.Icon src={`./icons/additional/${item.icon}.png`} />
          <S.Content>
            <S.Title>{item.key}</S.Title>
            <S.Description>{item.value}</S.Description>
          </S.Content>
        </S.Container>
      ))}
    </>
  );
};
export default SmallBlock;
