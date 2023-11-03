import React, { useEffect, useState } from "react";
import * as S from "./style";
import getWeatherData from "../../global/api";
import { useDispatch, useSelector } from "react-redux";
import { addWeatherData } from "../../store/slice";

const LargeBlock = () => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    getWeatherData("Kaliningrad").then((data) => {
      dispatch(addWeatherData(data));
      setLoaded(true);
    });
  }, []);

  const cityData = useSelector((state) => state?.weatherData);
  // console.log(location); // country, localtime, name, region, utc_offset,
  // console.log(current); // cloudcover, humidity, observation_time, temperature, weather_descriptions[], weather_icons[], wind_speed, pressure, uv_index, visibility
  return (
    <>
      <S.Container>
        {loaded && (
          <S.Content>
            <S.Icon src={cityData.weather_icons[0]} />
            <S.Description>{cityData.weather_descriptions[0]}</S.Description>
            <S.CityIcon src="./icons/city.png" />
            <S.Title>{cityData.name}</S.Title>
            <S.Temp>{cityData.temperature}°C</S.Temp>
            <S.Time>as of {cityData.observation_time}</S.Time>

            {/* <S.Icon src="./icons/Partly cloudy.png" />
            <S.Description>Partly cloudy</S.Description>
            <S.CityIcon src="./icons/city.png" />
            <S.Title
            // onClick={() => console.log(cityData)}
            >
              New York
            </S.Title>
            <S.Temp>9 °C</S.Temp>
            <S.Time>As of 01:52 PM</S.Time> */}
          </S.Content>
        )}
      </S.Container>
    </>
  );
};
export default LargeBlock;
