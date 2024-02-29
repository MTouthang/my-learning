import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// search bar -
function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchParams({ search: searchTerm });
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}

// search result -
function SearchResults() {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get('search');

  return (
    <div>
      <h2>Search Results</h2>
      {searchTerm && <p>Your search term: {searchTerm}</p>}
    </div>
  );
}

function App() {
  return (
    <div>
      <SearchBar />
      <SearchResults />
    </div>
  );
}

export default App;
