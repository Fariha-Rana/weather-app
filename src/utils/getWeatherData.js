"use server";
import { BASE_URL, API_KEY } from "./variable";

export async function getWeatherData(currentState, formData) {
  try {
    const cityName = formData?.get("city");

    const response = await fetch(
      `${BASE_URL}forecast.json?key=${API_KEY}&q=${cityName}&days=1&aqi=yes&alerts=yes`,
      { cache: "no-store" }
    );

    if (!response.ok) {
      const res = await response.json();
      return res.error?.message;
    }

    const weatherData = await response.json();
    return weatherData;
  } catch {}
}
