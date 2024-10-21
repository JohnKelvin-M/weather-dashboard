import PropTypes from "prop-types"; 

const ErrorMessage = ({ message }) => {
  return (
    <div className="p-4 bg-red-500 text-white rounded-md">
      {message ? (
        <p>{message}</p>
      ) : (
        <p>Something went wrong. Please try again.</p>
      )}
    </div>
  );
};


ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, 
};

export default ErrorMessage;
