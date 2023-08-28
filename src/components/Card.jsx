import PropTypes from "prop-types";

export const Card = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} /> <p>{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};
