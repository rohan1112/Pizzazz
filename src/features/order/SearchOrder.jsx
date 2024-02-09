import { useState } from 'react';
import { useNavigate } from 'react-router';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order..."
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-full bg-yellow-200 px-4 py-2 text-sm transition-all duration-300 placeholder:text-xs placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:focus:w-72 md:w-72"
      />
    </form>
  );
}

export default SearchOrder;
