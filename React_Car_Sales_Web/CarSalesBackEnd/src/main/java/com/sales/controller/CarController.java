package com.sales.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.sales.domain.Car;
import com.sales.repository.CarRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CarController {
	
	@Autowired
	private CarRepository repo;

	@RequestMapping(value = "/cars", method = RequestMethod.GET)
	public List<Car> getAllCars(){
		return repo.findAll();
	}
	@RequestMapping(value = "/make/{make}", method = RequestMethod.GET)
	public List<Car> getAllCarsByMake(@PathVariable("make") String make){
		return repo.findByMake(make);
	}
	@RequestMapping(value = "/model/{model}", method = RequestMethod.GET)
	public List<Car> getAllCarsByModel(@PathVariable("model") String model){
		return repo.findByModel(model);
	}
	@RequestMapping(value = "/create", method = RequestMethod.POST)
	public Car addCar(@RequestBody Car car) {
		return repo.save(car);
	}
	@RequestMapping(value = "/pricerange/{lowerPrice}/{upperPrice}", method = RequestMethod.GET)
	public List<Car> getAllCarsByPriceRange(@PathVariable("lowerPrice") int lowerPrice,@PathVariable("upperPrice") int upperPrice){
		return repo.findByPriceBetweenQuery(lowerPrice - 1, upperPrice + 1);
	}
	@RequestMapping(value = "/yearrange/{lowerYear}/{upperYear}", method = RequestMethod.GET)
	public List<Car> getAllCarsByYearRange(@PathVariable("lowerYear") int lowerYear,@PathVariable("upperYear") int upperYear){
		return repo.findByYearBetweenQuery(lowerYear - 1, upperYear + 1);
	}
	@RequestMapping(value = "/mileagerange/{lowerMileage}/{upperMileage}", method = RequestMethod.GET)
	public List<Car> getAllCarsByMileageRange(@PathVariable("lowerMileage") int lowerMileage,@PathVariable("upperMileage") int upperMileage){
		return repo.findByMileageBetweenQuery(lowerMileage - 1, upperMileage + 1);
	}
}
