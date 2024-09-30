'use client';

// app/weather/[location]/page.tsx
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

  const coordinates = {
    latitude: 12.933756,
    longitude: 77.625825,
  };

  useEffect(() => {
    dispatch(fetchWeatherData(coordinates)); // Ensure correct typing
  }, [location, dispatch]);

  return (
    <div className='flex justify-center items-center h-screen'>
      <WeatherDetails weather={weather} />
    </div>
  );
}
