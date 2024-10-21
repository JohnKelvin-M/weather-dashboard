import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = ({ fetchWeather }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue) {
      fetchWeather(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded-md"
        placeholder="Enter city"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 ml-2 rounded-md"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

SearchBar.propTypes = {
  fetchWeather: PropTypes.func.isRequired,
};

export default SearchBar;
