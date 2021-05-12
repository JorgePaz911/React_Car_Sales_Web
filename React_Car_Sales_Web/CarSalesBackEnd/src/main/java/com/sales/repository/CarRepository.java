package com.sales.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.sales.domain.Car;

public interface CarRepository extends MongoRepository<Car, String> {

	List<Car> findByMake(String make);
	List<Car> findByModel(String model);
	@Query("{'year' : {$gt : ?0, $lt : ?1}}")
	List<Car> findByYearBetweenQuery(int lowerYear, int upperYear);
	@Query("{'mileage' : {$gt : ?0, $lt : ?1}}")
	List<Car> findByMileageBetweenQuery(int lowerMileage, int upperMileage);
	@Query("{'price' : {$gt : ?0, $lt : ?1}}")
	List<Car> findByPriceBetweenQuery(int lowerPrice, int upperPrice);
}
