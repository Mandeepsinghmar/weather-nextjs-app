'use client';

import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Weather App Only For India</h1>
      <SearchBar />
    </div>
  );
}
