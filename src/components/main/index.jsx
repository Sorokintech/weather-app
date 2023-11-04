import * as S from "./style";
import SmallBlock from "../SmallBlock/SmallBlock";
import LargeBlock from "../LargeBlock/LargeBlock";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { addCityInfo, addWeatherData } from "../../store/slice";

export const Main = ({ itemsShown, setItemsShown }) => {
  const [loaded, setLoaded] = useState(true);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   getWeatherData("Kaliningrad").then((data) => {
  //     dispatch(addWeatherData(data));
  //     setLoaded(true);
  //   });
  // }, []);

  // const cityData = useSelector((state) => state?.weatherData);
  // console.log(cityData);
  const cityData = {
    name: "Kaliningrad",
    country: "Russia",
    region: "Kaliningrad",
    lat: "54.710",
    lon: "20.500",
    timezone_id: "Europe/Kaliningrad",
    localtime: "2023-11-04 12:21",
    localtime_epoch: 1699100460,
    utc_offset: "2.0",
    observation_time: "10:21 AM",
    temperature: 10,
    weather_code: 176,
    weather_icons: [
      "https://cdn.worldweatheronline.com/images/wsymbols01_png_64/wsymbol_0009_light_rain_showers.png",
    ],
    weather_descriptions: ["Patchy rain possible"],
    wind_speed: 32,
    wind_degree: 219,
    wind_dir: "SW",
    pressure: 991,
    precip: 0.1,
    humidity: 86,
    cloudcover: 100,
    feelslike: 6,
    uv_index: 2,
    visibility: 10,
    is_day: "yes",
  };
  dispatch(addWeatherData(cityData));
  dispatch(addCityInfo(cityData));
  const data = useSelector((state) => state?.cityInfo);

  return (
    <S.Container>
      <S.Wrapper value="e">
        <LargeBlock />
        {/* {data.map((item) => (
          <SmallBlock {...item} />
        ))} */}
      </S.Wrapper>
    </S.Container>
  );
};
