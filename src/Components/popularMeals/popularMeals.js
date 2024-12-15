import React from "react";
import "./style.css";

function PopularMeals() {
  const meals = [
    { img: require("../../images/card-img-1.png"), name: "Beverages" },
    { img: require("../../images/card-img-2.png"), name: "Brownie" },
    { img: require("../../images/card-img-3.png"), name: "Lobster" },
  ];

  return (
    <section className="section-2">
      <h1 className="section-heading">Popular Meals</h1>
      <div className="cards-container">
        {meals.map((meal, index) => (
          <div key={index} className="card">
            <img src={meal.img} alt={meal.name} className="card-img" />
            <h3 className="card-name">{meal.name}</h3>
            <button className="card-btn">Order now</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PopularMeals;
