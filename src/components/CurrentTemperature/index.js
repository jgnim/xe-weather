import styled from "styled-components"

const CurrentTemperature = ({current, cityName, logo}) => {
  return (
    <Current>
      <div id='info'>
        <div id='photo'>
          <img src={logo(current.weather[0].id)} alt={current.weather[0].main}></img>
        </div>
        <div id='moreInfo'>
          <div id='city'>            
            {cityName[0].toUpperCase()+cityName.slice(1)}
          </div>
          <div id='weather'>
            {current.weather[0].main}
          </div>
        </div>        
      </div>
      <Temperature>
        <div id='number'>
          {Math.round(current.temp)}
        </div>
        <div id='degree'>
          °C
        </div>            
      </Temperature>
    </Current>
  )
}

export default CurrentTemperature

const Current = styled.div`
  background-color: ${props => props.theme.background[1]}; 
  min-width: 256px;
  height: 469px;
  display: flex;
  flex-direction: column;
  text-align: center;  
  border-radius: 40px;  
  align-items: space-between;
  justify-content: space-between;  
  img { 
    width: 40px;
    height: 100%;
    margin: auto;
  }
  #photo {
    background-color: #AED3F4;
    width: 100px;
    height: 100px; 
    border-radius: 50%;
    margin: auto;
    margin-top: 48px
  }
  #city {
    font-size: 2em;    
    line-height: 120%;
    font-weight: 600;
    margin-top: 16px;
    width: 100%;
  }
  #weather {
    font-size: 12px;
    font-weight: 600; 
    color: rgba(13, 29, 53, 0.3)
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;        
    #info {
      display: flex;
      flex-direction: row;      
      padding: 10px;
    }
    #photo {
      width: 60px;
      height: 60px;
      margin: auto;
    }
    #city{
      font-size: 20px;
    }
    #weather{
      font-size: 12px      
    }
    #moreInfo{
      text-align: left;
      margin-left: 20px;
    }
  }
`
const Temperature = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: 500;
  color: #001133;
  line-height: 90%;  
  justify-content: center;  
  margin-bottom: 48px;
  #number {
    font-size: 120px;
    line-height: 90%;
  }
  #degree {
    font-size: 32px;
    line-height: 120%;
    vertical-align: text-top;
  }
  @media (max-width: 750px) {   
    margin: 0px;
    margin-right: 40px;
    #number {
      font-size: 52px;
    }
    #degree {
      font-size: 19px;
    }
  }
`