import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const API_KEY = "b240c543249b8f741f1c91c0fd591c29";
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError(null);
      } else {
        setError(data.message);
        setWeatherData(null);
      }
    } catch (err) {
      console.error(err);
      setError("Network error, please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Weather Dashboard</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {error && <ErrorMessage message={error} />}{" "}
      {/* Display error message if there's an error */}
      {weatherData && <WeatherCard data={weatherData} />}{" "}
      {/* Display weather card if data is fetched */}
    </div>
  );
};

export default App;
