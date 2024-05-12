import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  //Disperar efecto secundario
  useEffect(() => {
    getImages();
  }, []); //Solo se dispara la primer vez que se crea y se construye el componente

  const deleteImage = (id) => {
    setImages((images) => images.filter((image) => image.id !== id));
  };

  return {
    images,
    isLoading,
    deleteImage,
  };
};
