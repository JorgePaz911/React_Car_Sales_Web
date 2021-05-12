import React, { useEffect, useState } from "react";
import Car from "./Car";
import Form from "./Form";
import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = async () => {
    const response = await fetch(`http://localhost:8080/cars`);
    const data = await response.json();
    setCars(data);
  };

  return (
    <div className="App">
      <h1 className="title">Vehicle Search</h1>
      <div className="forms">
        <Link to="/uploadcar">
          <h3>Sell Vehicle</h3>
        </Link>
        <Form name="Make" />
        <Form name="Model" />
        <Form name="Year" />
        <Form name="Mileage" />
        <Form name="Price" />
        <input className="searchbtn" type="submit" value="Search" />
      </div>

      <div className="cars">
        {cars.map((car) => (
          <Car
            key={car.id}
            make={car.make}
            model={car.model}
            year={car.year}
            mileage={car.mileage}
            price={car.price}
            image={car.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
