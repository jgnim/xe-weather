import styled from "styled-components"
import CurrentTemperature from "../CurrentTemperature"
import HourlyTemperature from "../HourlyTemperature"
import LOGO from '../../assets/logo';
import DailyTemperature from "../DailyTemperature";

const WeatherInfo = ({weatherData, cityName}) => {
  if (weatherData) {
  const {current, daily, hourly, timezone_offset} = weatherData
  const colours = [`#E4F0FE`,`#C3E0FB`,`#CDF0EB`,`#FFF4DA`,`#FDD4D7`]
    return(
      <Container>
        <CurrentTemperature current={current} logo={LOGO} cityName={cityName}/>
        <UpcomingTemperature>
          <HourlyTemperature hourly={hourly} logo={LOGO} colours={colours} time={current.dt} offset={timezone_offset}/>
          <DailyTemperature daily={daily} logo={LOGO} colours={colours}/>
        </UpcomingTemperature>        
      </Container>
    )
  }
  else return null
}

export default WeatherInfo

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 28px;
  margin-top: 37px;  
  @media (max-width: 750px){
    flex-direction: column;
    gap: 0px;
  }
`
const UpcomingTemperature = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;  
  @media (max-width: 750px){
    width: 100%;
  }
`