'use client'; // To use hooks like useState and Redux in the App Router

import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../store/searchSlice';
import { useState } from 'react';

export default function SearchBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [input, setInput] = useState('');
  const searchTerm = useSelector((state: any) => state.search.term);

  const handleSearch = (location: string) => {
    dispatch(setSearchTerm(location));
    router.push(`/weather/${location}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    // Implement autocomplete fetching here if needed
  };

  return (
    <div className='flex flex-col items-center'>
      <input
        type='text'
        value={input}
        onChange={handleInputChange}
        className='border p-2 rounded-lg text-lg w-80'
        placeholder='Enter a location...'
      />
      <button
        className='mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg'
        onClick={() => handleSearch(input)}
      >
        Search
      </button>
    </div>
  );
}
