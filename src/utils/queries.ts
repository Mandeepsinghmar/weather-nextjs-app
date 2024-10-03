'use client';

export async function getWeather({
  latitude = 12.933756,
  longitude = 77.625825,
}: {
  latitude: number;
  longitude: number;
}) {
  console.log(process.env.NEXT_PUBLIC_API_KEY);

  const response = await fetch(
    `https://www.weatherunion.com/gw/weather/external/v0/get_weather_data?latitude=${latitude}&longitude=${longitude}`,
    {
      headers: {
        'X-Zomato-Api-Key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    }
  );
  const data = await response.json();
  return data.locality_weather_data;
}
