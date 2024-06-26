import React, { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

interface Image {
  id: string;
  download: number;
  url: string;
  // Add any other properties of the image here
}

interface Props {
  url: string;
  limit: number;
  page: number;
}

const ImageSlider: React.FC<Props> = ({ url, limit, page }) => {
  const [images, setImages] = useState<Image[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await fetch(`${url}?page=${page}&limit=${limit}`);
        const data = await response.json();

        if (data) {
          setImages(data);
          setLoading(true);
        }
      } catch (e) {
        if (e instanceof Error) {
          setErrorMsg(e.message);
        } else {
          setErrorMsg('An error occurred');
        }
        setLoading(false);
      }
    }

    fetchImages();
  }, [url, limit, page]);

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={handlePrevious}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? 'current-image'
                  : 'current-image hide-current-image'
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={handleNext}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? 'current-indicator'
                    : 'current-indicator inactive-indicator'
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

export default ImageSlider;
