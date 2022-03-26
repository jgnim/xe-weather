import clearCloudy from './clear-cloudy.svg';
import cloudy from './cloudy.svg';
import cold from './cold.svg';
import drizzle from './drizzle.svg';
import foggy from './foggy.svg';
import hail from './hail.svg';
import isolatedThunderstorms from './isolated-thunderstroms.svg';
import mostlyCloudy from './mostly-cloudy.svg';
import partlyCloudy from './partly-cloudy.svg';
import showers from './showers.svg';
import sleet from './sleet.svg';
import snowFlurries from './snow-flurries.svg';
import snow from './snow.svg';
import sunny from './sunny.svg';
import thunderstorm from './thunderstroms.svg';
import tornado from './tornado.svg';
import windy from './windy.svg';

// const LOGO = {
//   clearCloudy: clearCloudy,
//   clouds: cloudy,
//   cold: cold,
//   drizzle: drizzle,
//   foggy: foggy,
//   hail: hail,
//   isolatedThunderstorms: isolatedThunderstorms,
//   mostlyCloudy: mostlyCloudy,
//   partlyCloudy: partlyCloudy,
//   showers: showers,
//   sleet: sleet,
//   snowFlurries: snowFlurries,
//   snow: snow,
//   sunny: sunny,
//   thunderstorm: thunderstorm,
//   tornado: tornado,
//   windy: windy
// }
const LOGO = (id) => {
  if (id >=200 && id <= 232){
    return thunderstorm
  }
  else if (id >= 300 && id <= 321) {
    return drizzle
  }
  else if (id >= 500 && id <= 531) {
    return showers
  }
  else if (id >= 600 && id <= 622) {
    return snow
  }
  else if (id >= 701 && id <= 771) {
    return foggy
  }
  else if (id === 781) {
    return tornado
  }
  else if (id === 800) {
    return sunny
  }
  else if (id >= 801 && id <= 804) {
    return cloudy
  }
}

export default LOGO