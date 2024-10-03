// app/weather/[location]/page.tsx
'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppDispatch, RootState } from '@/src/store/store';
import { fetchWeatherData } from '@/src/store/weatherSlice';
import WeatherDetails from '@/src/components/WeatherDetails';

interface WeatherPageProps {
  params: {
    location: string;
  };
}

export default function WeatherPage({
  params: { location },
}: WeatherPageProps) {
  const dispatch = useDispatch<AppDispatch>(); // Use typed dispatch
  const weather = useSelector((state: RootState) => state.weather.data);

  useEffect(() => {
    if (location) {
      const coordinates = {
        latitude: 12.933756, // You might want to get these from your API based on the location
        longitude: 77.625825,
      };
      dispatch(fetchWeatherData(coordinates)); // Ensure correct typing
    }
  }, [location, dispatch]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <WeatherDetails weather={weather} location={location} />
    </div>
  );
}
