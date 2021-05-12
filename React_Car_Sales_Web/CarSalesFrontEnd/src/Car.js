import React from "react";

const Car = ({ make, model, image, price, mileage, year }) => {
  return (
    <div className="indivcar">
      <img className="image" src={image} alt=" "></img>
      <h1 className="make">{make}</h1>
      <div className="textRight">
        <h3>{model}</h3>
        <h3>{year}</h3>
        <h3>{mileage} Miles</h3>
        <h3>${price}</h3>
      </div>
    </div>
  );
};

export default Car;
