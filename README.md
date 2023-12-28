# Weather App

## website-link=""

This is a weather app built using Next.js and Tailwind CSS. It fetches current weather data from the WeatherAPI and displays it in a user-friendly interface.

## Features

It mainly uses reactjs' useformstate hook , nextjs' natively configured fetch api and server actions.

- Get current weather data for any city
- Display current weather conditions, hourly data, astrological information, and weather alerts
- User-friendly interface with loading indicators and error handling

## Technologies Used

- Next.js
- React
- Tailwind CSS

## Installation

1. Clone the repository
2. Install dependencies using `pnpm install`

## Usage

1. Set your WeatherAPI key in the `.env.example` file. you will need `https://www.weatherapi.com/` api key
2. Run the app using `pnpm run dev`


## Folder Structure

- **src/**
  - **app/**
    - **layout.js**: Defines the layout component for the app.
  - **components/**
    - **WeatherDashboard.js**: Contains the main weather dashboard component.
    - **CurrentWeatherComponent.jsx**: Component for displaying current weather information.
    - **AlertCard.js**: Component for displaying weather alerts.
    - **HourlyData.js**: Component for displaying hourly weather data.
    - **AstroComponent.js**: Component for displaying astronomical data.
    - **Button.js**: Component for a submit button.
    - **LocationComponent.js**: Component for displaying location information.
    - **Loading.js**: Component for displaying a loading indicator.
  - **utils/**
    - **variable.js**: File containing base URL and API key for weather API.
    - **getWeatherData.js**: Function for fetching weather data from the API.