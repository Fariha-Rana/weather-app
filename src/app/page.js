import Link from "next/link";
import Image from "next/image";
import WeatherDashBoard from '@/components/WeatherDashbaord'

export default async function Home() {

  return(
    <main className='w-full h-full p-0 m-0 overflow-x-hidden '>
      <div className="flex flex-row align-center justify-center items-center text-center m-2 text-xs font-sans">
       powered by:{" "} <Link className="pl-2" href="https://www.weatherapi.com/" title="Free Weather API"><img src='https://cdn.weatherapi.com/v4/images/weatherapi_logo.png' alt="Weather data by WeatherAPI.com" className="w-16"/></Link>
      </div>
      <WeatherDashBoard/>
    </main>
  )
}