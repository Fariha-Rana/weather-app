"use client";
import { getWeatherData } from "@/utils/getWeatherData";

import SubmitButton from "./Button";
import CurrentWeatherComponent from "./CurrentWeatherComponent";
import LocationComponent from "./LocationComponent";
import HourlyData from "./HourlyData";
import AstroComponent from "./AstroComponent";
import AlertCard from "./AlertCard";
import Loader from "./Loading";

import { useFormState } from "react-dom";
import { Suspense } from "react";

function WeatherDashBoard() {
  const [state, formAction] = useFormState(getWeatherData, null);
  const error = typeof state === "string" && state;
  const isData = typeof state === "object" && state;
  const data = state?.forecast?.forecastday[0];
  const hourlyData = data?.hour;
  const astroData = data?.astro;
  const alertData = state?.alerts?.alert[0];

  return (
    <>
      <div className="pb-16 pt-8 h-full flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-red-200 via-pink-100 to-cyan-700">
        <p className="h-6 my-2 text-red-600 text-lg">{error && error}</p>
        <h6 className="text-sm lg:text-lg font-serif pb-1">
          Enter a city name to get current weather conditions
        </h6>

        <form
          className="relative h-10 w-56 min-w-[200px] mt-2 "
          action={formAction}
        >
          <input
            className="peer h-full w-full rounded-[7px] border border-sky-900 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-blue-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50 "
            name="city"
            placeholder=" "
            required
            autoComplete="on"
          />
          <label className="before:content[' '] after:content[' '] text-gray-500 pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-blue-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-blue-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-blue-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            City Name
          </label>

          <div className="text-sm flex items-center justify-center">
            <SubmitButton />
          </div>
        </form>
      </div>

      <section className="flex flex-col justify-center items-center bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-blue-100 via-orange-100 to-sky-900">
        {isData ? (
          <>
            <div className="mt-10">
              <LocationComponent location={state?.location} />{" "}
            </div>

            <div className="h-max pb-8">
              {" "}
              <CurrentWeatherComponent current={state?.current} />
            </div>

            <div className=" border-t-2 border-white w-screen mb-8"></div>

            <div>
              <Suspense fallback={<Loader />}>
                <AstroComponent astro={astroData} />
              </Suspense>
            </div>

            <div className=" border-t-2 border-white w-screen mt-8"></div>

            <div className="px-4">
              <Suspense fallback={<Loader />}>
                <AlertCard alert={alertData} />
              </Suspense>
            </div>

            <div className=" border-t-2 border-white w-screen mt-8"></div>

            <div>
              <Suspense fallback={<Loader />}>
                <HourlyData hourlyData={hourlyData} />
              </Suspense>
            </div>
          </>
        ) : (
          <h1 className="p-60 lg:text-2xl md:text-2xl text-lg font-serif flex whitespace-nowrap justify-center items-center">
            data will appear here
          </h1>
        )}
      </section>
    </>
  );
}

export default WeatherDashBoard;
