import { useState, useEffect } from "react";

const images = ["/casamento1.jpg", "/casamento2.jpg", "/casamento3.jpg"];

const ImageCarousel: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-64 w-64 items-center justify-center rounded-md bg-black">
      <img
        src={images[currentImageIndex]}
        alt="Imagem do Casamento"
        className="h-full w-full object-contain"
      />
    </div>
  );
};

export default ImageCarousel;
