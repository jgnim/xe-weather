import useSWR from "swr";

const DataFetch = (loading,lat,lon) => {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  //const {data, error} = useSWR(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=1f89da47fe4d0be6bbbf376af70bdb58`,fetcher)
  const {data, error} = useSWR(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&units=metric&appid=d37622b1ff4a63e4ef6eb5759aad5be3`,fetcher)  
  return {   
    data: data,
    isLoading: !error && !data,
    isError: error
  }
}
export default DataFetch