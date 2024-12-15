import React from "react";

const GalleryItem = ({ img, name, description }) => {
  return (
    <a href="#" className="gallery-link" title="Order Now">
      <img src={img} alt={name} className="food-img" />
      <h3 className="food-name">{name}</h3>
      <p className="food-description">{description}</p>
    </a>
  );
};

export default GalleryItem;
