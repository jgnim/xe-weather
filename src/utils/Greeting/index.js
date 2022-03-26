const Greeting = () => {  
const currentTime = new Date();
  if (currentTime.getHours() < 6){
    return `Good Morning 🌙`
  }
  else if (currentTime.getHours() < 12) {
    return `Good Morning 🌞`
  }
  else if (currentTime.getHours() < 18){
    return `Good Afternoon 🌞`
  }
  else {
    return `Good Evening 🌙`
  }
}

export default Greeting