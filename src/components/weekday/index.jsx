import { useSelector } from "react-redux";
import * as S from "./style";

export const Weekday = () => {
  // const humidity = useSelector((state => state.currentCity.cityInfo.humidity))
  // const cloudcover = useSelector((state => state.currentCity.cityInfo.cloudcover))
  // const feelslike = useSelector((state => state.currentCity.cityInfo.feelslike))
  // const pressure = useSelector((state => state.currentCity.cityInfo.pressure))
  
  // const data = [humidity, cloudcover, feelslike, pressure];
    // const data = [];
    // const info = ['Humidity', 'Cloud cover', 'Feels like', 'Pressure'];
  return (

    <S.Row>
      {/* {data?.map((e, index) => (
        <S.Container key={e}>
          <S.Wrapper>
            <S.Day>{info[index]}</S.Day>
            <S.Block>
              <S.Img src="/icon.png"></S.Img>
            </S.Block>
            <S.Temp>{e}</S.Temp>
          </S.Wrapper>
        </S.Container>
      ))} */}
    </S.Row>
  );
};
