import React, { useEffect, useState } from "react";
import * as S from "./style";
import getWeatherData from "../../global/api";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData } from "../../store/slice";

const LargeBlock = () => {
  const cityData = useSelector((state) => state?.weatherData);
  return (
    <>
      <S.Container>
        {/* {props && ( */}
        <S.Content>
          <S.Icon
            // src={cityData.weather_icons[0]}
            src={`./icons/additional/cloudcover.png`}
          />
          <S.Temp>
            {cityData.temperature}°C / {cityData.temperature * 1.8 + 32}°F
          </S.Temp>
          <S.Description>{cityData.weather_descriptions[0]}</S.Description>
          <S.CityIcon src="./icons/city.png" />
          <S.Title>{cityData.name}</S.Title>
          <S.Time>as of {cityData.observation_time} today</S.Time>
        </S.Content>
        {/* )} */}
      </S.Container>
    </>
  );
};
export default LargeBlock;
