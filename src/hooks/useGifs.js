import { useState, useEffect } from "react";
import { getGifs } from "../data/repo.api";

export const useGifs = (field) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(field);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return { images, isLoading };
};
