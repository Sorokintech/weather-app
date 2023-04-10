import * as S from "./style";
import { cities, citiesAssemble } from "../../global/cities2";
import { useState } from "react";
import { addCity } from "../../store/actions/creators/index";
import { useDispatch } from "react-redux";
import { fetchData } from "../../global/api";
import { mockData } from "../../global/mock";
import { addData } from "../../store/actions/creators/data";
import { cityData } from "../../global/api";
import { useEffect } from "react";

export const Search = () => {
    citiesAssemble();
    
    const dispatch = useDispatch();
    
    const [value, setValue] = useState();
    const [data, setData] = useState();
    const [country, setCountry] = useState();
    const [currentCity, setCurrentCity] = useState();
    const practice = (inputValue) => {
        setValue(inputValue);
        let cityName = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);
        const res = cities.filter(word => word.city.startsWith(cityName));
        const list = []
        const cnt = []
        for (let i = 0; i < res.length; i++) {
            list.push(res[i].city)
            cnt.push(res[i].country)
        }
        console.log(list);
        console.log(cnt)
        setData(list)
        setCountry(cnt)
    }
   useEffect(() => {
    const timer = setTimeout(() => {
        const {
            current: {wind_speed, cloudcover, temperature, weather_descriptions, humidity, pressure, weather_icons,  observation_time },
            location: { name, country }
        } = cityData;
        dispatch(addCity(name, country, temperature, weather_descriptions[0], humidity, observation_time, cloudcover, wind_speed, pressure, weather_icons[0]))
    }, 1000)
    return () => clearTimeout(timer)
  
   }, [])
    
    const settingCity = (item) => {
        fetchData(item);
        const lateAdd = setTimeout(() => {
            const {
                current: {wind_speed, cloudcover, temperature, weather_descriptions, humidity, pressure, weather_icons,  observation_time },
                location: { name, country }
            } = cityData;
            dispatch(addCity(name, country, temperature, weather_descriptions[0], humidity, observation_time, cloudcover, wind_speed, pressure, weather_icons[0]))
        }, 1000)
        

        setCurrentCity(item);
        dispatch(addData(true));
        setData('');
        setValue('');
        return () => clearTimeout(lateAdd);
    }

    return (
        <S.Container>
            <S.Img src="./icons/cloudy.png"/>
            <S.list>
            {data && data.slice(-4).sort((a, b) => a.length - b.length).map((item, index) => (
                    <S.listItem  onClick={() => settingCity(item)} key={index}>{item}, {country[index]}</S.listItem>
            ))}
            </S.list>
            <S.SearchBar placeholder="Please enter a City Here" onChange={(e) => practice(e.target.value)} value={value}></S.SearchBar>
            
        </S.Container>
    )
};