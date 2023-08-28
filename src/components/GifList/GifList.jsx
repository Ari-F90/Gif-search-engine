import { Card } from "../Card/Card";
import { useGifs } from "../../hooks/useGifs";
import PropTypes from "prop-types";
import "./GifList.css";

export const GifList = ({ field }) => {
  const { images, isLoading } = useGifs(field);

  return (
    <>
      <h3 className="title-category">{field}</h3>
      {isLoading && <h2 className="loading">Loading...</h2>}
      <div className="card-grid">
        {images.map((image) => (
          <Card key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifList.propTypes = {
  field: PropTypes.string,
};
