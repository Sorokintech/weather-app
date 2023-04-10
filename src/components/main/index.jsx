
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { addCity } from "../../store/actions/creators";
import { mockData } from "../../global/mock";
import { mockCity } from "../../global/mockCity";
import { temperature } from "../../global/mock";


export const Main = () => {
    
    const currentCity = useSelector(state => state.currentCity.cityInfo);
    console.log(currentCity)
     const  {
             wind, cloudcover, temperature, description, humidity, pressure, icon, city, country, time
        } = currentCity;
     
    // dispatch(addCity(name, country, temperature, weather_descriptions[0], humidity, localtime, cloudcover, feelslike, pressure, weather_icons[0]))
    // const city = useSelector((state => state.currentCity.cityInfo.city))
    // const temperature = useSelector((state => state.currentCity.cityInfo.temperature))
    // const description = useSelector((state => state.currentCity.cityInfo.description))
    // const icon = useSelector((state => state.currentCity.cityInfo.icon))
    


    return( 
            <S.Container> 
                        <S.Wrapper value="e">
                        <S.LeftBlock>
                            <S.Img src={`./icons/${description}.png`}/>
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
                                <S.SmallBlockImg src="./icons/humidity.png"/>
                                <S.SmallBlockText>
                                    <S.SmallBlockName>Humidity</S.SmallBlockName>
                                    <S.SmallBlockValue>{humidity} %</S.SmallBlockValue>
                                </S.SmallBlockText>
                            </S.SmallBlock>
                            <S.SmallBlock>
                                <S.SmallBlockImg src="./icons/pressure.png"/>
                                <S.SmallBlockText>
                                    <S.SmallBlockName>Air Pressure</S.SmallBlockName>
                                    <S.SmallBlockValue>{pressure} PS</S.SmallBlockValue>
                                </S.SmallBlockText>
                            </S.SmallBlock>
                            <S.SmallBlock>
                                <S.SmallBlockImg src="./icons/small_wind.png"/>
                                <S.SmallBlockText>
                                    <S.SmallBlockName>Wind Speed</S.SmallBlockName>
                                    <S.SmallBlockValue>{wind} km/h</S.SmallBlockValue>
                                </S.SmallBlockText>
                            </S.SmallBlock>
                            <S.SmallBlock>
                                <S.SmallBlockImg src="./icons/cl.png"/>
                                <S.SmallBlockText>
                                    <S.SmallBlockName>Cloud cover</S.SmallBlockName>
                                    <S.SmallBlockValue>{cloudcover} %</S.SmallBlockValue>
                                </S.SmallBlockText>
                            </S.SmallBlock>
                        </S.RightBlock>
                        </S.Wrapper>
        </S.Container>
        )
        
}
