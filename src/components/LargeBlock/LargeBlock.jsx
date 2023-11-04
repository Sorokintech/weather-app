import React, { useEffect, useState } from "react";
import * as S from "./style";
import getWeatherData from "../../global/api";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData } from "../../store/slice";

const LargeBlock = () => {
  const cityData = useSelector((state) => state?.weatherData);

  if (!cityData) {
    return null;
  }

  return (
    <>
      <S.Container>
        <S.Content>
          <S.Icon src={`./icons/additional/cloudcover.png`} />
          <S.Temp>
            {cityData.temperature}°C /{" "}
            {(cityData.temperature * 1.8 + 32).toString().slice(0, 4)}°F
          </S.Temp>
          {cityData.weather_descriptions &&
            cityData.weather_descriptions.length > 0 && (
              <S.Description>{cityData.weather_descriptions[0]}</S.Description>
            )}
          <S.CityIcon src="./icons/city.png" />
          <S.Title>{cityData.name}</S.Title>
          <S.Time>as of {cityData.observation_time} today</S.Time>
        </S.Content>
      </S.Container>
    </>
  );
};
export default LargeBlock;
