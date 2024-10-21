import PropTypes from "prop-types"; // Importing PropTypes for validation

const WeatherCard = ({ data }) => {
  if (!data || !data.main || !data.weather || !data.wind) {
    return <div>No weather data available</div>;
  }

  const { main, weather, wind, name } = data;
  const { temp, humidity } = main;
  const { speed } = wind;
  const { icon, description } = weather[0]; // Assuming weather is an array, and we're taking the first item

  return (
    <div className="p-4 border rounded-lg bg-blue-100">
      <h2 className="text-xl font-bold">{name}</h2>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${icon}.png`}
          alt={description}
          className="w-12 h-12"
        />
        <div className="ml-4">
          <p>{description}</p>
          <p className="text-2xl">{temp}°C</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {speed} km/h</p>
        </div>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired, // City name
    main: PropTypes.shape({
      temp: PropTypes.number.isRequired, // Temperature
      humidity: PropTypes.number.isRequired, // Humidity
    }).isRequired,
    wind: PropTypes.shape({
      speed: PropTypes.number.isRequired, // Wind speed
    }).isRequired,
    weather: PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string.isRequired, // Weather icon
        description: PropTypes.string.isRequired, // Weather description
      })
    ).isRequired,
  }).isRequired,
};

export default WeatherCard;
