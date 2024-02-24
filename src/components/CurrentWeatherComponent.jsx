import Image from "next/image";

const CurrentWeatherComponent = ({ current }) => {
  return (
    <>
      <h1 className="mt-8 flex justify-center items-center font-mono text-2xl text-gray-200">now</h1>
      <section className=" flex flex-row flex-wrap text-white text-center justify-center items-center font-mono">

      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center p-2 w-40 h-40">
        <span className="font-bold">
          last updated on  {" "}  <small>{current?.last_updated}</small>
        </span>
      </div> 

      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center p-2 w-40 h-40">
           <span>{current?.is_day === 0 ? "🌙 " : "☀️"}</span>
        <span className="font-bold">
          {current?.temp_c}°C / {current?.temp_f}°F
        <hr/>
        </span>
        <span className="text-xs font-light pt-1">
          Feels like {current?.feelslike_c}°C / {current?.feelslike_f}°F
        </span>
      </div>

      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center  p-2 w-40 h-40">
        <span>{current?.condition.text}
        <img
            src={`https:${current?.condition?.icon}`}
            alt={current?.condition?.text}
            className="w-auto h-auto"
          /></span>
      </div>


      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center  p-2 w-40 h-40">
        <span>⛅ Cloud Cover   <hr/> {current?.cloud}%</span>
        {/* <p>{current?.is_day === 0 ? "night" : "day"}</p> */}
      </div> 
      
      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center  p-2 w-40 h-40">
      <span>
        🌧️ Precipitation 
        <hr/>
         { current?.precip_mm} mm / {current?.precip_in } in
        </span>
      </div>    
      
       <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center  p-2 w-40 h-40">
        <span>

        🍃 Wind Speed
          <hr/>
           {current?.wind_kph} kph / {current?.wind_mph} mph
        </span>
      </div>     

      <div className="flex flex-col bg-cyan-950 m-2 border border-spacing-1 rounded-md justify-center items-center text-center  p-2 w-40 h-40">
        <h6 className="font-medium mb-1 pb-1">😷Air quality <hr/></h6>
        <div>
          <p>pm25: {current?.air_quality?.pm2_5}</p>
          <p>pm10: {current?.air_quality?.pm10}</p>
        </div>
      </div>
    </section>
    </>
  );
};

export default CurrentWeatherComponent;
