import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} /> <p className="title-gif">{title}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};
