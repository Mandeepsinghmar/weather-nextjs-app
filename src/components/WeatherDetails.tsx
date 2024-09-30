'use client';

interface WeatherDetailsProps {
  weather: any;
}

export default function WeatherDetails({ weather }: WeatherDetailsProps) {
  if (!weather) {
    return <p>Loading...</p>;
  }

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold'>
        {weather.location?.name || 'Unknown Location'}
      </h2>
      <p>Temperature: {weather.temperature?.current || 'N/A'}°C</p>
      <p>Condition: {weather.weather?.description || 'N/A'}</p>
      <p>Humidity: {weather.humidity || 'N/A'}%</p>
      {/* Add more weather details as per the API response */}
    </div>
  );
}
