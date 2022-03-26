import MainApp from './components/MainApp';
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import WebFont from 'webfontloader'
import {useEffect} from 'react'

function App() {
  useEffect(()=>{
    WebFont.load({
      google: {
        families: ['Inter']
      }
    })    
  },[])
  const textColours = {
    main: `#001133`,
    sub: `#989EAA`,
    background: [`#E4F0FE`,`#C3E0FB`,`#CDF0EB`,`#FFF4DA`,`#FDD4D7`]    
  }
  const GlobalStyle = createGlobalStyle`
    body{
      color: ${textColours.main};
      font-family: 'Inter';
    }
  `
  return (
    <div className="App">
      <ThemeProvider theme={textColours}>
        <GlobalStyle/>
        <MainApp />
      </ThemeProvider>
      
    </div>
  );
}

export default App;
