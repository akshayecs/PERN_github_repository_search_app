
import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Search() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([null]);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const token = localStorage.getItem('token'); 
      const response = await axios.post(`http://localhost:8000/api/search-username?username=${searchQuery}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setSearchResult(response.data); // Update search result state
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error searching username:', error);
      setSearchResult([]); // Clear search result on error
      setError('Error searching username. Please try again.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="input-group mb-3">
            <input 
              type="text" 
              className="form-control" 
              placeholder="search username" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
            <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <div className="mt-3">
            <h5>Search Result:</h5>
            {searchResult ? (
              <pre>{searchResult}</pre>
            ) : (
              <p>No search result found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
