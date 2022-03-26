import styled from "styled-components"

const HourlyTemperature = ({hourly, logo, colours, offset}) => {
  if (hourly) {
    let hourlyData = [];
    for (let i=0; i<5; i++) {
      let hourlyTime = new Date((hourly[i].dt) * 1000);
      hourlyData.push({
        temp: hourly[i].temp,
        weatherId: hourly[i].weather[0].id,
        weatherText: hourly[i].weather[0].main,
        time: hourly[i].dt,
        hour: (hourlyTime.getUTCHours() + (offset/3600))%24, //Converts to local time, some timezone is +/- 30 minutes from the hour
        
        colour: colours[i]
        }        
      )      
    }
    return (
      <Container>
        {hourlyData.map((value)=>{            
          return (
            <Panel key={value.time}>
              <div style={{color: `#989EAA`, fontSize: '20px', lineHeight: `130%`, fontWeight: 'bold'}}>
                {value.hour === 12 ? `12 PM` :
                  value.hour > 12 ? `${value.hour-12} PM` : 
                  value.hour < 0 ? `${12+value.hour} PM` :
                  `${value.hour} AM`}
              </div>
              <div style={{backgroundColor: value.colour, width: `80px`, height: `80px`, borderRadius: `50%`, margin: `auto`}}>
                <img src={logo(value.weatherId)} alt={value.weatherText}></img>
              </div>
              <div style={{color: `#2F2727`, fontSize: '20px', lineHeight: '130%', fontWeight: 'bold'}}>
                {Math.round(value.temp)} °C
              </div>
            </Panel>
          )
        })}
      </Container>
    )
  }
  else return null
}

export default HourlyTemperature

const Container = styled.div`
  display: flex;
  text-align: center;
  gap: 24px;
  height: 188px;
  @media (max-width: 750px){
    margin-top: 32px;    
    display: flex;
    gap: 20px;
    overflow-x: auto;
    min-width: 200px;
  }
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;  
  padding: 10px;
  min-width: 100px;
  img {
    display: block;
    margin: auto;
    width: 30px;
    height: 100%;
    margin: auto;
  }
`