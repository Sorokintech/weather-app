import { useSelector } from "react-redux";

import * as S from "./style";

export const Main = ({ itemsShown, setItemsShown }) => {
  console.log(itemsShown);
  const currentCity = useSelector((state) => state.currentCity.cityInfo);
  const {
    wind,
    cloudcover,
    temperature,
    description,
    humidity,
    pressure,
    city,
    time,
  } = currentCity;
  const availableIcons = [
    "Cloudy",
    "Mist",
    "Partly cloudy",
    "Rainy",
    "Snow",
    "Storm",
    "Sunny",
  ];
  const iconSearch = (description) => {
    return availableIcons.includes(description) ? description : "unknown";
  };

  return (
    <S.Container
      onClick={() => {
        setItemsShown(false);
      }}
    >
      <S.Wrapper value="e">
        <S.LeftBlock>
          <S.Img src={`./icons/${iconSearch(description)}.png`} />
          <S.Condition>{description}</S.Condition>
          <S.CityBlock>
            <S.locationImg src="./icons/city.png" alt="" />
            <S.City>{city}</S.City>
          </S.CityBlock>
          <S.Time>As of {time}</S.Time>
          <S.Temp>{temperature}°C</S.Temp>
        </S.LeftBlock>
        <S.RightBlock>
          <S.SmallBlock>
            <S.SmallBlockImg src="./icons/humidity.png" />
            <S.SmallBlockText>
              <S.SmallBlockName>Humidity</S.SmallBlockName>
              <S.SmallBlockValue>{humidity} %</S.SmallBlockValue>
            </S.SmallBlockText>
          </S.SmallBlock>
          <S.SmallBlock>
            <S.SmallBlockImg src="./icons/pressure.png" />
            <S.SmallBlockText>
              <S.SmallBlockName>Air Pressure</S.SmallBlockName>
              <S.SmallBlockValue>{pressure} PS</S.SmallBlockValue>
            </S.SmallBlockText>
          </S.SmallBlock>
          <S.SmallBlock>
            <S.SmallBlockImg src="./icons/small_wind.png" />
            <S.SmallBlockText>
              <S.SmallBlockName>Wind Speed</S.SmallBlockName>
              <S.SmallBlockValue>{wind} km/h</S.SmallBlockValue>
            </S.SmallBlockText>
          </S.SmallBlock>
          <S.SmallBlock>
            <S.SmallBlockImg src="./icons/cl.png" />
            <S.SmallBlockText>
              <S.SmallBlockName>Cloud cover</S.SmallBlockName>
              <S.SmallBlockValue>{cloudcover} %</S.SmallBlockValue>
            </S.SmallBlockText>
          </S.SmallBlock>
        </S.RightBlock>
      </S.Wrapper>
    </S.Container>
  );
};
