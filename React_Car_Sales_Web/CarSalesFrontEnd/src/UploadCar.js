import React from "react";
import Form from "./Form";
import "./App.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const postData = async (data) => {
  let result = await fetch("http://localhost:8080/create", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      make: data.make,
      model: data.model,
      mileage: data.mileage,
      year: data.year,
      price: data.price,
      imageUrl: data.imgurl,
    }),
  });
  console.log(result);
};

const UploadCar = () => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="uplcar">
      <h1 className="title2">Upload Vehicle</h1>
      <Link to="/">
        <h3 className="carsearchbtn">Car Search</h3>
      </Link>
      <form className="arrangeform" onSubmit={handleSubmit(postData)}>
        <div className="formSpace">
          Make
          <input type="text" name="make" ref={register} />
        </div>
        <div className="formSpace2">
          Model
          <input type="text" name="model" ref={register} />
        </div>
        <div className="formSpace3">
          Year
          <input type="number" name="year" ref={register} />
        </div>
        <div className="formSpace4">
          Price
          <input type="number" name="price" ref={register} />
        </div>
        <div className="formSpace5">
          Mileage
          <input type="number" name="mileage" ref={register} />
        </div>
        <div className="formSpace6">
          Image URL
          <input type="text" name="imgurl" ref={register} />
        </div>
        <input className="uplvehbtn" type="submit" />
      </form>
    </div>
  );
};

export default UploadCar;
