package com.ug.angular.project.controllers;

import com.ug.angular.project.exception.ResourceNotFoundException;
import com.ug.angular.project.modules.Car;
import com.ug.angular.project.services.CarService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/api/cars")
public class CarController {
    private final CarService carService;

    @GetMapping
    public List<Car> getAllCars() {
        return carService.getAllCars();
    }

    @GetMapping("/{carId}")
    public ResponseEntity<Car> getCarById(@PathVariable String carId) {
        try {
            Car car = carService.getCarById(carId);
            return ResponseEntity.ok(car);
        } catch (ResourceNotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping
    public Car saveCar(@RequestBody Car car) {
        return carService.saveCar(car);
    }

    @PutMapping("/{carId}")
    public Car updateCar(@PathVariable String carId, @RequestBody Car car) {
        Optional<Car> carOptional = Optional.ofNullable(carService.getCarById(carId));

        if(carOptional.isPresent()) {
            Car carToUpdate = carOptional.get();
            carToUpdate.setCarCompanyName(car.getCarCompanyName());
            carToUpdate.setCarYear(car.getCarYear());
            carToUpdate.setCarModel(car.getCarModel());
            carToUpdate.setCarColors(car.getCarColors());

            return carService.saveCar(carToUpdate);
        } else {
            throw new ResourceNotFoundException("Car not found for id: " + carId);
        }

    }

    @DeleteMapping("/{carId}")
    public void deleteCar(@PathVariable String carId) {
        carService.deleteCar(carId);
    }

}
