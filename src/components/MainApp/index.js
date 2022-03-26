
import { useEffect, useState } from "react";
import WeatherInfo from "../WeatherInfo";
import Greeting from "../../utils/Greeting";
import styled from "styled-components";
import LoadingSpin from "../../utils/LoadingSpin";
import useSWR from "swr";
import Papa from 'papaparse';
import citylist from '../../assets/city/cities.csv'

const MainApp = () => {  
  const colours = [`#E4F0FE`,`#C3E0FB`,`#CDF0EB`,`#FFF4DA`,`#FDD4D7`]
  const presetCity = [
    {id: 1, name: `Toronto`, lat: '43.70011', lon: '-79.4163', emoji: `🏒`},
    {id: 2, name: `Rio de Janeiro`, lat: '-22.9028', lon: '-43.2075', emoji: `⛱`},
    {id: 3, name: `Japan`, lat: '35.6895', lon: '139.69171', emoji: '🍣'},
    {id: 4, name: `Madrid`, lat: '40.4165', lon:'-3.70256', emoji: '💃'},
    {id: 5, name: `Australia`, lat: '-37.814', lon: '144.96332', emoji: '🐨'},
  ]
  //Converting csv file to json
  useEffect(()=>{
    Papa.parse(citylist, {
      download: true,
      complete: (res)=>{        
        setCityListBank(res.data)
      }
    })
  },[])
  const [cityInfo, setCityInfo] = useState(presetCity); //State to store city info
  const [cityListBank, setCityListBank] = useState(); //State to store the json of the csv
  const [selectedCity, setSelectedCity] = useState(1); //State to store current city to display
  const [userText, setUserText] = useState("Toronto"); //Input text

  const fetcher = (...args) => fetch(...args).then(res => res.json())  
  const {data} = useSWR(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityInfo[selectedCity-1].lat}&lon=${cityInfo[selectedCity-1].lon}&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_SECRET_KEY}`,fetcher,{focusThrottleInterval: 600000})
  
  const changeCity = (id) => { 
    setSelectedCity(id);
    setUserText(cityInfo[id-1].name)    
  }
  const fetchCity = (e) => {    
    e.preventDefault(); 
    //Searching through the json file to see if user search text has match
    for (let i=1; i<cityListBank.length-1; i++){      
      if (cityListBank[i][1].toLowerCase() === userText.toLowerCase()){ 
        let newPresetCity = cityInfo;
        newPresetCity.push({
          id: presetCity.length+1,
          name: userText,
          lat: cityListBank[i][5],
          lon: cityListBank[i][6]
        })
        setCityInfo(newPresetCity)
        setSelectedCity(newPresetCity.length)                
        return
      }
      if (i === cityListBank.length-2) {        
        alert(`Unable to find city`)
      }
    }
  }  

  const changeText = (e) => {
    setUserText(e.target.value)
  }
  
  return (
    <Container>
      <h2 style={{fontSize: '48px', fontWeight: 600, lineHeight: `120%`, fontStyle: `semibold`}}>
        {Greeting()}
      </h2>
      <form onSubmit={fetchCity}>
        <input type="text" onChange={changeText} placeholder="Enter city name.." value={userText}/>
      </form>
      <PresetCities selectedCity>
        <ul>
          {presetCity.map(({id,name,emoji})=>{
            return (
              <li key={id} onClick={()=>changeCity(id)} style={{backgroundColor: selectedCity === id ? colours[1] : "white"}}>
                {`${name} ${emoji}`}
              </li>
            )
          })}
        </ul>
      </PresetCities>
      {data ? <WeatherInfo weatherData={data} cityName={cityInfo[selectedCity-1].name}/> : 
        <LoadingSpin />
      }
      
    </Container>
  )
    
}

export default MainApp

const Container = styled.div`
  width: 75%;
  margin: auto;
  input {
    width: 400px;
    font-size: 1.5em;   
    text-indent: 15px;
    line-height: 150%;    
  }
  @media (max-width: 750px) {
    input {
      width: 100%;
    }
  }
`

const PresetCities = styled.div`
  display: flex;
  text-align: center;
  font-size: 18px;
  white-space: nowrap;
  overflow: auto;
  width: 100%;
  margin-top: 15px;
  ul {
    display: flex;
    list-style-type: none;
    padding: 5px;
    margin: 0;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 600;
  }
  ul:hover{
    cursor: pointer;
  }
  li {
    padding: 8px 24px 8px 24px;
    text-align: center;
    border-radius: 10px;
  }
  @media (max-width: 750px){
    text-wrap: nowrap;
  }
`