import React from "react";
import "./style.css";
import GalleryItem from "./galleryItem";


const galleryItems = [
  {
    img: require("../../images/img-1.jpg"),
    name: "Pasta",
    description: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs.",
  },
  {
    img: require("../../images/img-2.jpg"),
    name: "Pizza",
    description: "A baked Italian dish of a thinly rolled bread crust typically topped before baking with tomato sauce, cheese, etc.",
  },
  {
    img: require("../../images/img-3.jpg"),
    name: "Noodles",
    description: "Noodles are a staple food in many cultures and made into a variety of shapes.",
  },
  {
    img: require("../../images/img-4.jpg"),
    name: "Hamburger",
    description: "Hamburger, a food consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.",
  },
  {
    img: require("../../images/img-5.jpg"),
    name: "Salmon",
    description: "Salmon, a food consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.",
  },
  {
    img: require("../../images/img-6.jpg"),
    name: "Vegetables",
    description: "Vegetables, a food consisting of one or more cooked beef patties, placed inside a sliced bread roll or bun roll.",
  },
];

const Gallery = () => {
  return (
    <div className="gallery">
      {galleryItems.map((item, index) => (
        <GalleryItem
          key={index}
          img={item.img}
          name={item.name}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default Gallery;
