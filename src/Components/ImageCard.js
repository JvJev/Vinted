import React, { useState } from 'react';
import './ImageCard.css';

const ImageCard = ({ image }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleFavoriteClick = () => {
    const favoritePhotos = JSON.parse(localStorage.getItem('favoritePhotos')) || {};
    favoritePhotos[image.id] = !isFavorite;
    localStorage.setItem('favoritePhotos', JSON.stringify(favoritePhotos));
    setIsFavorite(prev => !prev);
  };

  return (
    <div
      className={`image-card ${isHovered ? 'hovered dimmed' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image.src.medium} className="card-image" alt={image.alt} />
      <div
        className={`card-body text-center justify-content-center align-items-center ${
          isHovered ? 'visible' : 'invisible'
        }`}
      >
        <div className="card-title">{image.photographer}</div>
        <hr className="divider" />
        <div className="card-text">{image.alt}</div>
        <button className="favorite-button" onClick={handleFavoriteClick}>
          {isFavorite ? 'Remove Favorite' : 'Favorite'}
        </button>
      </div>
    </div>
  );
};

export default ImageCard;
