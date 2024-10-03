// store/weatherSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState, AppDispatch } from './store'; // Import types from store
import { getWeather } from '../utils/queries';

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
>('weather/fetchWeatherData', async ({ latitude, longitude }) => {
  const data = await getWeather({ latitude, longitude });
  return data;
});

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
