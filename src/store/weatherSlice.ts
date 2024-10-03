// store/weatherSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from './store'; // Import types from store

interface WeatherState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: WeatherState = {
  data: null,
  loading: false,
  error: null,
};

// Updated fetchWeatherData with type definitions
export const fetchWeatherData = createAsyncThunk<
  any, // Return type of the payload creator
  { latitude: number; longitude: number }, // First argument type
  { state: RootState } // Optional: Type for thunk API
>(
  'weather/fetchWeatherData',
  async ({ latitude = '12.933756', longitude = '77.625825' }) => {
    const response = await fetch(
      `https://www.weatherunion.com/gw/weather/external/v0/get_weather_data?latitude=${latitude}&longitude=${longitude}`,
      {
        headers: {
          'X-Zomato-Api-Key': process.env.API_KEY,
        },
      }
    );
    const data = await response.json();
    return data.locality_weather_data;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default weatherSlice.reducer;
