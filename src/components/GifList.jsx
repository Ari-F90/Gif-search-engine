import { Card } from "./Card";
import { useGifs } from "../hooks/useGifs";
import PropTypes from "prop-types";

export const GifList = ({ field }) => {
  const { images, isLoading } = useGifs(field);

  return (
    <>
      <h3>{field}</h3>
      {isLoading && <div>Loading...</div>}
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
