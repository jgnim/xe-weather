import styled from "styled-components"

const DailyTemperature = ({daily, logo, colours}) => {
  if (daily) {
    const dailyData = [];
    const dayOfWeek = {
      0: 'Sunday', 1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday'
    }
    for (let i=0; i< 5; i++){
      dailyData.push({
        time: daily[i].dt,
        weatherId: daily[i].weather[0].id,
        weatherText: daily[i].weather[0].main,
        temp: daily[i].temp.day,
        colour: colours[i]
      })
    }
    return (
      <Container>
        {dailyData.map((value,index)=>{
          const date = new Date(value.time * 1000)
          return (
            <Panel key={value.time} style={{backgroundColor: value.colour}}>
              <div id='info'>
                <div>
                  <img src={logo(value.weatherId)} alt={value.weatherText}></img>
                </div>
                <div id='dayOfWeek'>
                  <div style={{color: '#0D1D35', fontSize: `18px`, lineHeight: '120%', fontWeight: 'bold', }}>
                    {index === 0 ? 'Today' :
                      index === 1 ? "Tomorrow" :
                      dayOfWeek[date.getDay()]}
                  </div>
                  <div style={{color: '#989EAA', fontSize: '12px', lineHeight: '120%'}}> 
                    {value.weatherText}
                  </div>
                </div>  
              </div>      
              <div style={{color: '#2F2727', fontSize: '20px', lineHight: '130%', fontWeight: 'bold'}}>
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

export default DailyTemperature

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  
  text-align: center;
  gap: 24px;
  @media (max-width: 750px) {
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    
    padding-bottom: 50px;
  }
`
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 188px;
  border-radius: 30px;
  text-align: center;
  padding: 10px; 
  min-width: 100px;
  @media (max-width: 750px){
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;    
    border-radius: 10px;
    div{
      align-items: center;
    }    
    #info {
      display: flex;
      flex-direction: row;      
      min-width: 150px;
    }
    #dayOfWeek{
      margin-left: 24px;
      text-align: left;
    }
  }
`