'use client';

import SearchBar from './SearchBar';

interface WeatherDetailsProps {
  weather: any;
  location: string;
}

export default function WeatherDetails({
  weather,
  location,
}: WeatherDetailsProps) {
  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <SearchBar />
      <div className='text-center pt-4'>
        <h2 className='text-2xl font-bold capitalize  pb-4'>
          {location || 'Unknown Location'}
        </h2>
        <div className='flex gap-4'>
          <div className='flex gap-2 items-center p-6 text-white temperature-bg rounded-lg w-64'>
            <p className=' font-bold'>Temperature </p>
            <p>{weather.temperature || 'N/A'}°C</p>
          </div>
          <div className='flex gap-2 items-center p-6 text-white humidity-bg rounded-lg w-64 '>
            <p className='font-bold'>Humidity </p>
            <p>{weather.humidity || 'N/A'}%</p>
          </div>
        </div>
        <div className='flex gap-4 mt-4'>
          <div className='flex gap-4 '>
            <div className=' w-64  flex flex-col gap-2 items-center p-6 text-white wind-bg rounded-lg '>
              <div className='relative z-10 font-extrabold text-lg'>Wind</div>
              <div className='flex gap-2 items-center'>
                <p className=' font-bold'>Speed </p>
                <p> {weather.wind_speed || 'N/A'}m/s</p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className=' font-bold'>Direction</p>
                <p> {weather.wind_direction || 'N/A'}</p>
              </div>
            </div>
          </div>
          <div className='flex gap-4'>
            <div className='w-64 flex flex-col gap-2 items-center p-6 text-white rain-bg rounded-lg '>
              <div className='font-extrabold text-lg'>Rain</div>
              <div className='flex gap-2 items-center'>
                <p className=' font-bold'>Intensity </p>
                <p> {weather.rain_intensity}%</p>
              </div>
              <div className='flex gap-2 items-center'>
                <p className=' font-bold'>Accumulation:</p>
                <p> {weather.wind_direction || 'N/A'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
