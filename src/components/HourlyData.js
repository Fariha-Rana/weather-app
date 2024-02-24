import Image from "next/image";

const HourlyData = ({ hourlyData }) => {
  return (
    <div className="max-w-screen-sm lg:max-w-screen md:max-w-screen-lg xl:max-w-full mx-auto py-4 px-32 mt-8 text-white whitespace-nowrap " >
      <h1 className="lg:text-3xl md:text-3xl text-lg text-center font-sans mb-4">{"⏱Hourly Forecast"}</h1>
      <div className="overflow-x-auto ">
      <table className="w-min  text-center  bg-cyan-900 border border-gray-100  min-[359px]:ml-1 min-[359px]:mr-1 ml-16 mr-16 ">
        <thead>
          <tr className="text-sm font-sans">
            <th className="border border-gray-300 p-3">🕒Time</th>
            <th className="border border-gray-300 p-3">🌡Temp</th>
            <th className="border border-gray-300 p-3">Feels like</th>
            <th className="border border-gray-300 p-3">❄️Condition</th>
            <th className="border border-gray-300 p-3">☁️Cloud Cover</th>
            <th className="border border-gray-300 p-3">🍃Wind</th>
            <th className="border border-gray-300 p-3">☔︎︎Precipitation</th>
            <th className="border border-gray-300 p-3">☃️snow</th>
            <th className="border border-gray-300 p-3">⚡Chance of rain </th>
            <th className="border border-gray-300 p-3">🥶Chance of snow </th>
            <th className="border border-gray-300 p-3">😷air quality</th>
          </tr>
        </thead>
        <tbody>
          {hourlyData.map((hour, index) => (
            <tr className="text-sm lg:text-xs " key={index}>
              <td className="border border-gray-300 p-2">
                {hour?.time} {hour?.is_day === 0 ? "🌙 " : "☀️"}
              </td>
              <td className="border border-gray-300 p-2">
                {hour?.temp_c}°C / {hour?.temp_f} °F
              </td>
              <td className="border border-gray-300 p-2">
                {hour?.feelslike_c} °C / {hour?.feelslike_f} °F{" "}
              </td>
              <td className="flex  justify-center items-center border border-gray-300 p-2">
                  <img
                    src={`https:${hour?.condition.icon}`}
                    alt={hour?.condition.text}
                    className="w-8 h-auto inline"
                  />
                <span className="ml-2 text-wrap block">
                  {hour?.condition.text}
                </span>
              </td>
              <td className="border border-gray-300 p-2">{hour?.cloud} % </td>
              <td className="border border-gray-300 p-2">
                {hour?.wind_kph} kph / {hour?.wind_mph} mph{" "}
              </td>
              <td className="border border-gray-300 p-2">
                {hour?.precip_mm} mm / {hour?.precip_in} in{" "}
              </td>
              <td className="border border-gray-300 p-2">{hour?.snow_cm} cm</td>
              <td className="border border-gray-300 p-2">
                {hour?.chance_of_rain} %{" "}
              </td>
              <td className="border border-gray-300 p-2">
                {hour?.chance_of_snow} %{" "}
              </td>
              <td className="border border-gray-300 p-2">
                {hour?.air_quality?.pm2_5} pm25 / {hour?.air_quality?.pm10} pm10{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default HourlyData;
