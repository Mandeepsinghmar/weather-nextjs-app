'use client';

import SearchBar from './SearchBar';

interface WeatherDetailsProps {
  weather: any;
  location: any;
}

export default function WeatherDetails(
  { weather }: WeatherDetailsProps,
  { location }: any
) {
  if (!weather) {
    return <p>Loading...</p>;
  }

  console.log(location);
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <SearchBar />
      <div className='text-center pt-4 border-t'>
        <h2 className='text-2xl font-bold'>{location || 'Unknown Location'}</h2>
        <p>Temperature: {weather.temperature || 'N/A'}°C</p>
        <p>Humidity: {weather.humidity || 'N/A'}%</p>
        <p>Wind Speed: {weather.wind_speed || 'N/A'}m/s</p>
        <p>Wind Direction: {weather.wind_direction || 'N/A'}</p>
        <p>Rain Intensity: {weather.rain_intensity}%</p>
        <p>Rain Accumulation: {weather.rain_accumulation}mm</p>
      </div>
    </div>
  );
}
